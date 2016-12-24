import {Component, OnInit, NO_ERRORS_SCHEMA} from '@angular/core';

import {AccessService} from './access.service';
import {UserService} from '../core/user.service';
import {Right} from "./right";

@Component({
  moduleId: module.id,
  selector: 'app-access',
  templateUrl: 'access.component.html',
  styleUrls: ['access.component.css']
})
export class AccessComponent implements OnInit {

  right: Right;
  rights: Right[];

  msg = 'Загрузка прав доступа ...';
  userName = '';

  constructor(private accessService: AccessService, userService: UserService) {
    this.userName = userService.userName;
  }

  ngOnInit() {
    console.log('Инициализация компоненты `Access`');
    this.accessService.getRights().then(rights => {
      this.msg = '';
      this.rights = rights;
      this.right = rights[0];
    });
  }

  displayMessage(msg: string) {
    this.msg = msg;
    setTimeout(() => this.msg = '', 1500);
  }

}
