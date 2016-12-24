import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AccessComponent} from './access.component';
import {AccessService} from './access.service';
import {AccessRoutingModule} from './access-routing.module';

console.log('Bundle `Access` асинхронно загружен');

@NgModule({
  imports: [CommonModule, AccessRoutingModule],
  declarations: [AccessComponent],
  providers: [AccessService]
})
export class AccessModule {
}

