import {Component, OnInit} from '@angular/core';

import {Currency} from './currency';
import {Iso4217CurrencyService} from "./iso-4217-currency.service";
import {Iso4217Currency} from "./iso-4217-currency";

@Component({
  selector: 'iso-4217-currency-list',
  templateUrl: 'iso-4217-currency-list.component.html',
  providers: [Iso4217CurrencyService]
})
export class Iso4217CurrencyListComponent implements OnInit {

  iso4217Currencies: Iso4217Currency[];
  selectedIso4217Currency: Iso4217Currency;

  constructor(private iso4217Service: Iso4217CurrencyService) {
  }

  getIso4217Currencies(): void {
    this.iso4217Service.getCurrencies();
  }

  ngOnInit(): void {
    console.log('Инициализация компоненты `Iso4217Component`');
    this.getIso4217Currencies();
  }

  onSelect(iso4217Currency: Iso4217Currency): void {
    this.selectedIso4217Currency = iso4217Currency;
  }

}
