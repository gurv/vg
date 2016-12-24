import {Component, ViewEncapsulation} from '@angular/core';

import {AppState} from './app.service';

@Component({
  selector: 'vg-app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css',
    './theme.scss'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {

  title = 'VG';
  appName = '';
  vgLogo = 'assets/img/vg-avatar.png';
  url = 'https://github.com/gurv/vg';
  powerOn: boolean;
  info: boolean;
  leftSideNav: boolean;
  rightSideNav: boolean;

  constructor(public appState: AppState) {
    this.powerOn = false;
    this.info = false;
    this.leftSideNav = false;
    this.rightSideNav = false;
  }

  ngOnInit() {
    console.log('Начальное состояние приложения', this.appState.state);
  }

  toggleLeftSideNav() {
    this.leftSideNav = !this.leftSideNav;
  }

  toggleRightSideNav() {
    this.rightSideNav = !this.rightSideNav;
  }

  closeRightSideNav() {
    this.rightSideNav = false;
  }

}
