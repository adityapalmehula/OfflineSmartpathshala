import { Injectable } from '@angular/core';
import { Http ,Headers } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
	providedIn: 'root'
})
export class ClassesService {

	constructor(
		private http: Http
		) { }

	// Get all classes data -
	getClasses(){
		return this.http.get("http://localhost:3000/classes").pipe(map(data=>
			data.json()
			,(error:any)=>{
				error.json()
			}));
	}

	getCourses(id){
		return this.http.get("http://localhost:3000/courses/"+id).pipe(map(data=>
			data.json()
			,(error:any)=>{
				error.json()
			}));
	}
	getSyllabus(syllabusName){
		return this.http.get("http://localhost:3000/syllabus/"+syllabusName).pipe(map(data=>
			data.json()
			,(error:any)=>{
				error.json()
			}));
	}

}

