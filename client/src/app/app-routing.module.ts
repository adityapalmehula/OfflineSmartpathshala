import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayVideoComponent } from './play-video/play-video.component';
import { WhiteBoardComponent } from './white-board/white-board.component';

const routes: Routes = [
{ path: '', component: PlayVideoComponent },
{ path: 'whiteBoard', component: WhiteBoardComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash : true})]
})

export class AppRoutingModule {
}