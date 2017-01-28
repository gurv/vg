import {Component, OnInit, Input} from '@angular/core';
import {OpenWeatherMapService} from "./openweathermap/openweathermap.service";

@Component({
  selector: 'weather-dashboard',
  templateUrl: 'weather-dashboard.component.html',
  providers: [OpenWeatherMapService]
})
export class WeatherDashboardComponent implements OnInit {

  @Input() weather: number;

  constructor(private openWeatherMapService: OpenWeatherMapService) {
  }

  ngOnInit() {
    console.log('Инициализация компонента `WeatherDashboard`');
    this.getData();
  }

  getData(): void {
    this.openWeatherMapService.getWeather()
      .subscribe(
        weather => {
          console.debug('погода', weather);
          this.weather = weather.main.temp;
        }
      );
  }

}
