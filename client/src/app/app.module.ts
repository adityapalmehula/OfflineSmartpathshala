import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { PlayVideoComponent } from './play-video/play-video.component';
import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MessageService } from './services/common/message.service';
import { WhiteBoardComponent } from './white-board/white-board.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule }     from './app-routing.module';
import { CanvasWhiteboardModule } from 'ng2-canvas-whiteboard';
import { NgxLoadingModule,ngxLoadingAnimationTypes } from 'ngx-loading';
import { ErrorService } from './services/common/error.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
	declarations: [
	AppComponent,
	PlayVideoComponent,
	HeaderComponent,
	FooterComponent,
	WhiteBoardComponent
	],
	imports: [
	BrowserModule,
	HttpModule,
	AngularFontAwesomeModule,
	VgCoreModule,
	VgControlsModule,
	VgOverlayPlayModule,
	VgBufferingModule,
	BrowserAnimationsModule,
	AppRoutingModule,
	RouterModule,
	NgbModule.forRoot(),
	ToastrModule.forRoot(),
	NgxLoadingModule.forRoot({
        primaryColour: '#12a8b4', 
        secondaryColour: '#12a8b4', 
        tertiaryColour: '#12a8b4'
	}),
	CanvasWhiteboardModule
	],
	providers: [MessageService,ErrorService],
	bootstrap: [AppComponent]
})
export class AppModule { }
