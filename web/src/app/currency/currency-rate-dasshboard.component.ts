import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'currency-rate-dashboard',
  templateUrl: 'currency-rate-dashboard.component.html'
})
export class CurrencyRateDashboardComponent implements OnInit {

/*
  localState: any;
*/

  ngOnInit() {
    console.log('Инициализация компоненты `CurrencyRateDashboard`');

/*
    System.import('./mock-cbr-currency-rate.ts')
      .then(json => {
        console.log('асинхронно mockData', json);
        this.localState = json;
      });
*/
  }

}
