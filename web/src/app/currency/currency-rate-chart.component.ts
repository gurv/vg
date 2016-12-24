import {Component} from '@angular/core';
import {CbrCurrencyService} from "./cbr-currency/cbr-currency.service";
import {CbrCurrencyRateService} from './cbr-currency/cbr-currency-rate.service'
import {Iso4217CurrencyService} from "./iso-4217-cuurency/iso-4217-currency.service";

@Component({
  selector: 'currency-rate-chart',
  templateUrl: 'currency-rate-chart.component.html',
  styleUrls: ['currency-rate-chart.component.css'],
  providers: [Iso4217CurrencyService, CbrCurrencyService, CbrCurrencyRateService]
})
export class CurrencyRateChartComponent {

  columnChartOptions = {
    chartType: 'AreaChart',
    dataTable: [
      ['Дата', 'USD', 'EUR'],
      ['01.01.2016', 60, 70],
      ['01.02.2016', 62, 73],
      ['01.03.2016', 65, 77],
      ['01.04.2016', 70, 80],
      ['01.05.2016', 64, 74],
      ['01.06.2016', 65, 75]
    ]
  };

/*
  constructor(private cbrCurrencyRateService: CbrCurrencyRateService) {
    this.cbrCurrencyRateService.getCurrencyRates()
      .subscribe(result => console.log(result));
  }
*/

  constructor(private cbrCurrencyService: CbrCurrencyService) {
    this.cbrCurrencyService.getCurrencies()
      .subscribe();
  }

  myClick() {
    this.columnChartOptions = Object.create(this.columnChartOptions);
    for (let i = 1; i < 7; i++) {
      this.columnChartOptions.dataTable[i][1] = Math.round(
        Math.random() * 1000);
      this.columnChartOptions.dataTable[i][2] = Math.round(
        Math.random() * 1000);
    }
  }

}
