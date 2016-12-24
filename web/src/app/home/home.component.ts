import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    console.log('Инициализация компоненты `Home`');
  }

}
