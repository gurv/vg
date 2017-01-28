/*
 Сервис валют стандарта ISO 4217
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Iso4217Currency} from "./iso-4217-currency";
import {Observable} from "rxjs";

@Injectable()
export class Iso4217CurrencyService {

  private url: string = 'assets/data/iso-4217-currencies.json';

  constructor(private http: Http) {
  }

  getCurrencies(): Observable<Iso4217Currency[]> {
    return this.http.get(this.url)
      .map((response: Response) => response.json())
      .do((data: Iso4217Currency[]) => console.debug("Подготовлен список валют ISO 4217 в количестве", data.length, "шт."))
  }

}
