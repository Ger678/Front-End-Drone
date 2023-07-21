import { Component } from '@angular/core';

export interface WeatherConditions {
  temperature: number;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  visibility: number;
}

@Component({
  selector: 'app-weather-conditions',
  templateUrl: './weather-conditions.component.html',
  styleUrls: ['./weather-conditions.component.css']
})
export class WeatherConditionsComponent {
  weather: WeatherConditions = {
    temperature: 25, // en grados Celsius
    humidity: 70, // en porcentaje
    windSpeed: 15, // en km/h
    windDirection: 'North',
    visibility: 10 // en kilómetros
  };
}
