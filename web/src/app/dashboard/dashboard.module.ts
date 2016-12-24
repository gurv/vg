import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardComponent} from './dashboard.component';
import {CurrencyModule} from "../currency/currency.module";
import {EvolutionComponent} from '../currency/evolution.component'

console.log('Bundle `Dashboard` асинхронно загружен');

@NgModule({
  imports: [CommonModule, CurrencyModule],
  declarations: [DashboardComponent, EvolutionComponent]
})
export class DashboardModule {
}
