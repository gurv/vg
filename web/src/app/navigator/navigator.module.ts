import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NavigatorComponent} from './navigator.component';

console.log('Bundle `Navigator` асинхронно загружен');

@NgModule({
  imports: [CommonModule],
  declarations: [NavigatorComponent]
})
export class NavigatorModule {
}
