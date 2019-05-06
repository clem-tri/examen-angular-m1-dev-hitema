import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit {
  condition: string;
  icon: string;
  currentTemp: number;
  maxTemp: number;
  minTemp: number;
  name: string;

  constructor(public weatherService: WeatherService, private router: Router) {
    this.name = 'Paris';
  }

  ngOnInit() {
    this.loadWeather();
  }

  loadWeather() {
    this.condition = this.weatherService.getWeatherState(this.name);
    this.currentTemp = this.weatherService.getCurrentTemp(this.name);
    this.minTemp = this.weatherService.getMinTemp(this.name);
    this.maxTemp = this.weatherService.getMaxTemp(this.name);

    switch (this.condition) {
      case 'snow':
        this.icon = 'snowflake';
        break;
      case 'rain':
        this.icon = 'cloud-rain';
        break;
      case 'storm':
        this.icon = 'poo-storm';
        break;
      case 'clouds':
        this.icon = 'cloud';
        break;
      case 'sun':
        this.icon = 'sun';
        break;
    }
  }
  updateCity(city) {
    this.name = city;
    this.loadWeather();
  }

}
