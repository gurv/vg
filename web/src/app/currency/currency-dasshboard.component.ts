import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'currency-dashboard',
  templateUrl: 'currency-dashboard.component.html'
})
export class CurrencyDashboardComponent implements OnInit {

  ngOnInit() {
    console.log('Инициализация компонента `CurrencyRateDashboard`');
  }

}
