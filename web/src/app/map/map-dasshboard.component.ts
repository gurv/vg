import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'map-dashboard',
  templateUrl: 'map-dashboard.component.html'
})
export class MapDashboardComponent implements OnInit {

  ngOnInit() {
    console.log('Инициализация компонента `MapDashboard`');
  }

}
