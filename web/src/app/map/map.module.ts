import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GoogleMapComponent} from "./google-map.component";
import {MapDashboardComponent} from "./map-dasshboard.component";

console.log('Bundle `GoogleMap` асинхронно загружен');

@NgModule({
  imports: [CommonModule],
  exports: [MapDashboardComponent],
  declarations: [MapDashboardComponent, GoogleMapComponent]
})
export class MapModule {
}
