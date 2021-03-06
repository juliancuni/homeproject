import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../shared/services/app-settings/app-settings';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public app: any;
  constructor(public _appSettings: AppSettings) {
    this.app = _appSettings.gjejAppSeetings();
  }

  ngOnInit() {
  }

}
