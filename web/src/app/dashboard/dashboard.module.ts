import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardComponent} from './dashboard.component';
import {CurrencyModule} from "../currency/currency.module";
import {MapModule} from "../map/map.module";

console.log('Bundle `Dashboard` асинхронно загружен');

@NgModule({
  imports: [CommonModule, CurrencyModule, MapModule],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
