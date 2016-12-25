import {Component, OnInit} from '@angular/core';
import {CbrCurrencyService} from "./cbr-currency/cbr-currency.service";
import {CbrCurrencyRateDynamicService} from "./cbr-currency/cbr-currency-rate-dynamic.service";
import {CbrCurrency} from "./cbr-currency/cbr-currency";
import {CbrCurrencyRate} from "./cbr-currency/cbr-currency-rate";
import {Observable} from "rxjs";

@Component({
  selector: 'currency-rate-chart',
  templateUrl: 'currency-rate-chart.component.html',
  styleUrls: ['currency-rate-chart.component.css'],
  providers: [CbrCurrencyService, CbrCurrencyRateDynamicService]
})
export class CurrencyRateChartComponent implements OnInit {

  currency : CbrCurrency = new CbrCurrency('R01235', '', '', '', '840', 'USD', 1);
  beginDate: Date = new Date('2015-12-01');
  endDate: Date = new Date('2017-01-01');
  currencies: CbrCurrency[] = [
    new CbrCurrency('R01235', '', '', '', '840', 'USD', 1),
    new CbrCurrency('R01239', '', '', '', '978', 'EUR', 1),
    new CbrCurrency('R01035', '', '', '', '826', 'GBP', 1),
    new CbrCurrency('R01820', '', '', '', '392', 'JPY', 1)
    ];

  columnChartOptions = {
    chartType: 'LineChart',
    dataTable: []
  };

  constructor(private cbrCurrencyRateDynamicService: CbrCurrencyRateDynamicService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    // Подготовка пакета запросов курсов валют
    let batch: Array<Observable<CbrCurrencyRate[]>> = [];
    for (let i = 0; i < this.currencies.length; i++) {
      batch.push(
        this.cbrCurrencyRateDynamicService.getCurrencyRates(
          this.currencies[i],
          this.beginDate,
          this.endDate));
    }

    // Запрос и обработка курсов валют
    Observable.zip.apply(null, batch)
        .subscribe(
          data => {
            // Таблица графика
            let chartTable: (string | number)[][] = [];

            // Заполнение первой строки таблицы, которая содержит заголовок дат и валют
            let firstRow: (string)[] = [];
            firstRow.push('Дата');
            for (let i = 0; i < data.length; i++) {
              let idx: number = this.currencies.findIndex(currency => currency.id == data[i][0].cbrCurrencyId);
              firstRow.push(this.currencies[idx].isoCharCode);
            }
            chartTable.push(firstRow);

            // Заполнение таблицы данными курсов валют
            if (data.length > 0) {
              for (let r = 0; r < data[0].length; r++) {
                let row: (string | number)[] = [];
                for (let c = 0; c < data.length; c++) {
                  let rate: CbrCurrencyRate = data[c][r];
                  if (c == 0) {
                    row.push(rate.date.toLocaleDateString());
                  }
                  row.push(rate.value);
                }
                chartTable.push(row);
              }
            }
            console.debug('Подготовлена таблица данных графика курсов валют');

            this.columnChartOptions = Object.create(this.columnChartOptions);
            this.columnChartOptions.dataTable = chartTable;
          }
        );
  }

}
