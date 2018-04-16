import { Component, OnInit } from '@angular/core';

import { AppSettings } from '../../shared/services/app-settings/app-settings';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public app: any;
  constructor(public _appSettings: AppSettings) {
    this.app = _appSettings.gjejAppSeetings();
  }

  ngOnInit() {
  }

}
