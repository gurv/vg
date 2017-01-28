import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Iso4217CurrencyListComponent} from "../currency/iso-4217-cuurency/iso-4217-currency-list.component";
import {CurrencyDashboardComponent} from "./currency-dasshboard.component";
import {CurrencyRateChartComponent} from "./currency-rate-chart.component";
import {GoogleChartComponent} from "../shared/google-charts/google-chart/google-chart.component";

console.log('Bundle `Currency` асинхронно загружен');

@NgModule({
  imports: [CommonModule],
  exports: [CurrencyDashboardComponent],
  declarations: [GoogleChartComponent, CurrencyRateChartComponent, Iso4217CurrencyListComponent, CurrencyDashboardComponent]
})
export class CurrencyModule {
}
