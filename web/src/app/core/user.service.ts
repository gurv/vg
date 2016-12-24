import {Injectable, Optional} from '@angular/core';

export class UserServiceConfig {
  userName = 'Гуринович Владимир';
}

@Injectable()
export class UserService {

  private _userName = 'Гость';

  constructor(@Optional() config: UserServiceConfig) {
    if (config) {
      this._userName = config.userName;
    }
  }

  get userName() {
    return this._userName;
  }

}
