import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserService} from './user.service';
import {UserServiceConfig} from './user.service';

@NgModule({
  imports: [CommonModule],
  providers: [UserService]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule уже загружен. Достаточно только его импортировать в AppModule');
    }
  }

  static forRoot(config: UserServiceConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {provide: UserServiceConfig, useValue: config}
      ]
    };
  }
}
