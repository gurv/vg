import {Component} from '@angular/core';

@Component({
  selector: 'vg-navigator',
  templateUrl: './navigator.component.html'
})
export class NavigatorComponent {

  constructor() {
  }

  ngOnInit() {
    console.log('Инициализация компонента `Navigator`');
  }

}
