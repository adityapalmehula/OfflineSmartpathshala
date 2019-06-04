import { Injectable } from '@angular/core';
import { Http ,Headers } from '@angular/http';
// import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";

@Injectable({
	providedIn: 'root'
})
export class VideoService {

	constructor(
		private http: Http
		) { }

	// Get all video data
	getVideos(){
		return this.http.get("http://localhost:3000/pathJson").pipe(map(data=>
			data.json()
			,(error:any)=>{
				error.json()
			}));
	}

	videosDescription(nameObj){
		return this.http.post("http://localhost:3000/decription/play",nameObj).pipe(map(data=>
			data.json()
			,(error:any)=>{
				error.json()
			}));
	}

  encryption(){
		return this.http.get("http://localhost:3000/decription/encrypt").pipe(map(data=>
			data.json()
			,(error:any)=>{
				error.json()
			}));
	}

	// videosDescription(nameObj){
	// 	let headers = new Headers();
	// 	headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
	// 	headers.append('Access-Control-Allow-Credentials', 'true');
	// 	return this.http.post("http://localhost:3000/description/list",nameObj,{headers:headers}).pipe(map(data=>
	// 		data.json()
	// 		,(error:any)=>{
	// 			error.json()
	// 		}));
	// }

}
