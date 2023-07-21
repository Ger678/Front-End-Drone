import { Component } from '@angular/core';

export interface FlightPerformance {
  averageSpeed: number;
  maximumAltitude: number;
  totalDistanceTravelled: number;
  batteryUsage: number;
}

@Component({
  selector: 'app-performance-information',
  templateUrl: './performance-information.component.html',
  styleUrls: ['./performance-information.component.css']
})
export class PerformanceInformationComponent {
  flightPerformance: FlightPerformance = {
    averageSpeed: 30, // en km/h
    maximumAltitude: 100, // en metros
    totalDistanceTravelled: 5000, // en metros
    batteryUsage: 50 // en porcentaje
  };
}
