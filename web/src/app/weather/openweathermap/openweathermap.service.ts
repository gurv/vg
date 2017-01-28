/*
 Сервис погоды

 источник данных: http://openweathermap.org/current

 gurv\!qazxsw2
 vladimir.gurinovich@gmail.com
 b32189efe001e9dd2cb10a1503fa6827
 https://mail.google.com/mail/u/0/#inbox/15941ca4687e6c5c
 */
import {Injectable} from '@angular/core';
import {Http, URLSearchParams, Response} from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class OpenWeatherMapService {

  url: string = '/data/2.5/weather';

  constructor(private http: Http) {
  }

  getWeather(): Observable<any> {

    let searchParams: URLSearchParams = new URLSearchParams();
    searchParams.set('APPID', 'b32189efe001e9dd2cb10a1503fa6827');
    searchParams.set('units', 'metric');
    searchParams.set('lat', String(55));
    searchParams.set('lon', String(37));

    return this.http.get(this.url, {search : searchParams})
      .map((res: Response) => res.json());
  }

}
