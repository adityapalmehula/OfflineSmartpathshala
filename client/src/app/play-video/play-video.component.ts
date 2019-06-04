import { Component, OnInit,Input,ViewContainerRef,ElementRef,ViewChild } from '@angular/core';
import { CommonConfig } from './../config/common-config.constants';
import { ClassesService } from './../services/classes/classes.service';
import { VideoService } from './../services/videos/video.service';
import { MessageService } from './../services/common/message.service';
import { ErrorService } from './../services/common/error.service';

@Component({
	selector: 'app-play-video',
	templateUrl: './play-video.component.html',
	styleUrls: ['./play-video.component.css'],
	providers:[ClassesService,VideoService]
})
export class PlayVideoComponent implements OnInit {
	@Input() videoData: string;
	@ViewChild('videoPlayer') videoplayer: ElementRef;
	public logo: string= new CommonConfig().LOGO_PATH;
	classArray:any=[];
	className:string='Class';
	coursesName:string='Courses';
	classId:any;
	public courseArray:any=[];
	public syllabusArray:any=[];
	syllabus:string;
	topicName:string='Topic Name';
	public subTopics:any=[];
	isCollapsed:boolean=false;
	videoUrl:string;
	public currentVideo:string;
	public subtopicNameGet:string;
	errorMessage: string;

	constructor(
		private classesService : ClassesService,
		private videoService : VideoService,
		private _vcr : ViewContainerRef,
		private messageService : MessageService,
		private elRef: ElementRef,
		private errorService: ErrorService
		) { }

	ngOnInit() {
		this.getClasses()
	}

	// getting classes 
	getClasses(){
		this.messageService.showLoader.emit(true);
		this.classesService.getClasses().subscribe((response)=>{
			this.messageService.showLoader.emit(false);
			if(response['success'] && response['data']){
				this.classArray=response.data.classes;
			}
		},error=>{  
			this.messageService.showLoader.emit(false);
			this.errorMessage=error.json().msg;
			this.handleError(error);
		})
	}

	// class selected - 
	getClassesName(classObj){
		var obj=classObj;
		this.className=obj['classname'];
		this.classId=obj['id'];
		this.messageService.showLoader.emit(true);
		this.classesService.getCourses(this.classId).subscribe((response)=>{
			this.messageService.showLoader.emit(false);
			if(response['success'] && response['data']){
				this.courseArray=response['data'];
			}
		},error=>{
			this.messageService.showLoader.emit(false);
			this.errorMessage=error.json().msg;
			this.handleError(error);
		})
	}
	// get courses name -
	getCoursesName(courseObj){
		var obj=courseObj;
		this.coursesName=obj['coursename'];
		this.syllabus=obj['syllabus'];
		this.messageService.showLoader.emit(true);
		this.classesService.getSyllabus(this.syllabus).subscribe((response)=>{
			this.messageService.showLoader.emit(false);
			if(response['success'] && response['data']){
				this.syllabusArray=response['data'];
			}
		},error=>{
			this.messageService.showLoader.emit(false);
			this.errorMessage=error.json().msg;
			this.handleError(error);
		})
	}

	rotate(id) {
		document.getElementById(id).classList.toggle('rotate-up');
		document.getElementById(id).classList.toggle('rotate-down');
	}
	// assign subtopics
	assignSubtopic(subtopicObjecct:any){
		this.isCollapsed=true;
		this.topicName=subtopicObjecct['topicname'];
		this.isCollapsed=false;
	}

	videosObjectGet(videoObj:any){
		var obj=videoObj;
		this.videoUrl=obj['videoUrl'];
		let vidObj={};
		vidObj['videoURL']=this.videoUrl;
		this.currentVideo='';
		this.messageService.showLoader.emit(true);
		this.videoService.videosDescription(vidObj).subscribe((response)=>{
			this.messageService.showLoader.emit(false);
			if(response['success']){
				this.currentVideo="http://localhost:3000/videosGet/"+this.videoUrl;
			}
		},error=>{
			this.messageService.showLoader.emit(false);
			this.errorMessage=error.json().msg;
			this.handleError(error);
		})
	}

	assSubtopic(subObj:any){
		var obj=subObj;
		this.subtopicNameGet=obj['subtopicname'];
	}

	toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
 }

 // encryption process start -
 encryption(){
 	this.messageService.showLoader.emit(true);
 	this.videoService.encryption().subscribe((response)=>{
 		this.messageService.showLoader.emit(false);
 		if(response['success']){
 		console.log(JSON.stringify(response));
 		}
 	},error=>{
 		this.messageService.showLoader.emit(false);
 		this.errorMessage=error.json().msg;
 		this.handleError(error);
 	})
 }

	// Handle error
	handleError(error) {
		this.messageService.showLoader.emit(false);
		this.errorService.handleError(error, this._vcr);
	}

}
