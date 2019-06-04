import { Injectable } from '@angular/core';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
export class ErrorService {

	public errorMessage: string;

  constructor(
    private messageService: MessageService,
    ) {
  }

// Error handler to be used in all components
handleError(error, _vcr) {
  this.messageService.showLoader.emit(false);
  this.errorMessage=error.json().msg;
  this.messageService.showErrorToast(_vcr,this.errorMessage);

}


/* iterate error to show in all components */
iterateError(error){
  let errorMsg = JSON.parse(error._body);
  let msg = errorMsg.data.map((data)=>{
    return Object.keys(data)[0] + " : "+ data[Object.keys(data)[0]]
  })
  return msg;
}

}
