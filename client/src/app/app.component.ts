import { Component,ViewContainerRef,ViewChild,ElementRef} from '@angular/core';
import { VideoService } from './services/videos/video.service';
import { Http  } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from './services/common/message.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers:[VideoService]
})
export class AppComponent {
	@ViewChild('media')media: ElementRef;
	public videoArry = [];
	public currentVideo:string;
	public isLoading : boolean = false;

	constructor(
		private videoService : VideoService,
		private _vcr : ViewContainerRef,
		private messageService : MessageService,
		private elRef: ElementRef
		) { 
		this.messageService.showLoader.subscribe((isLoading: any) => {
			setTimeout(() => this.isLoading = isLoading, 0)
		});
	}
	
	ngOnInit() {
		//this.getVideoInfo()
	}

	//  getVideoInfo(){
		// 	this.videoService.getVideos().subscribe((response)=>{
			// 		this.videoArry=response;
			// 	},error=>{
				// 		console.log(error);
				// 	})
				// }
				
				// dateFilter(videoName:string){
					// 	debugger;
					// 	let videoObject={};
					// 	 videoObject['videoName']=videoName;
					// 	this.videoService.videosDescription(videoObject).subscribe((response)=>{
						// 		if(response['success']){
							
							// 	let  localHost='http://localhost:3000/videosGet/';
							// 	this.currentVideo=localHost+videoName;
							// 	const player = this.elRef.nativeElement.querySelector('video');
							// 	player.load();

							// 		}
							// },error=>{
								// 	console.log(error+"this is erroe");
								// })

								// 	this.media.nativeElement.click();
								// }

							}
