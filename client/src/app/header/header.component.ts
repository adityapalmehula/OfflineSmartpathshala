import { Component, OnInit } from '@angular/core';
import { CommonConfig } from './../config/common-config.constants';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public logo: string= new CommonConfig().LOGO_PATH;
  constructor() { }

  ngOnInit() {
  }

}
