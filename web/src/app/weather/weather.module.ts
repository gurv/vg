import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WeatherDashboardComponent} from "./weather-dasshboard.component";

console.log('Bundle `Weather` асинхронно загружен');

@NgModule({
  imports: [CommonModule],
  exports: [WeatherDashboardComponent],
  declarations: [WeatherDashboardComponent]
})
export class WeatherModule {
}
