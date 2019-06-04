import { Component, OnInit,ViewChild } from '@angular/core';
import { CommonConfig } from './../config/common-config.constants';
// import {CanvasWhiteboardUpdate} from 'ng2-canvas-whiteboard';
import { CanvasWhiteboardComponent, CanvasWhiteboardOptions, CanvasWhiteboardUpdate } from 'ng2-canvas-whiteboard';

@Component({
	selector: 'app-white-board',
	templateUrl: './white-board.component.html',
	styleUrls: ['./white-board.component.css'],
	viewProviders: [CanvasWhiteboardComponent]
	// encapsulation: ViewEncapsulation.None

})
export class WhiteBoardComponent implements OnInit {
	@ViewChild('canvasWhiteboard') canvasWhiteboard: CanvasWhiteboardComponent;
	batchUpdateTimeoutDuration: number;
	drawButtonClass: string;
	clearButtonClass: string;
	undoButtonClass: string; 
	redoButtonClass: string;
	saveDataButtonClass: string
	drawButtonEnabled: boolean;
clearButtonEnabled: boolean;
undoButtonEnabled: boolean;
redoButtonEnabled: boolean;
saveDataButtonEnabled: boolean;
colorPickerEnabled: boolean;
lineWidth: number;
strokeColor: string;
fillColor: string;
shouldDownloadDrawing: boolean;
startingColor: string;
scaleFactor: number;
drawingEnabled: boolean;
showStrokeColorPicker: boolean;
howFillColorPicker: boolean;

	public canvasOptions: CanvasWhiteboardOptions;
	public logo: string= new CommonConfig().LOGO_PATH;
	constructor() { 
	}

	ngOnInit() {
		this.canvasOptions = {
			drawButtonEnabled: true,
			drawButtonClass: "drawButtonClass",
			drawButtonText: "Draw",
			clearButtonEnabled: true,
			clearButtonClass: "clearButtonClass",
			clearButtonText: "Clear",
			undoButtonText: "Undo",
			undoButtonEnabled: true,
			redoButtonText: "Redo",
			redoButtonEnabled: true,
			colorPickerEnabled: true,
			saveDataButtonEnabled: true,
			saveDataButtonText: "Save",
			lineWidth: 5,
			strokeColor: "rgb(0,0,0)",
			shouldDownloadDrawing: true
		};
	}


}
