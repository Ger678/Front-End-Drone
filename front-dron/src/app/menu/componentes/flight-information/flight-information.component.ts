import { Component } from '@angular/core';

export interface Flight{
  flightID: string;
  flightDate: Date;
  flightDuration: string;
  flightPathCoordinates: string;
}

@Component({
  selector: 'app-flight-information',
  templateUrl: './flight-information.component.html',
  styleUrls: ['./flight-information.component.css']
})
export class FlightInformationComponent {
  flights: Flight[] = [  
  {
    flightID: 'F001',
    flightDate: new Date('2023-07-25'),
    flightDuration: '1 hora',
    flightPathCoordinates: 'lat1,lon1;lat2,lon2;lat3,lon3',
  },
  {
    flightID: 'F002',
    flightDate: new Date('2023-07-26'),
    flightDuration: '45 minutos',
    flightPathCoordinates: 'lat4,lon4;lat5,lon5;lat6,lon6'
  },
  ]

  flightInformation = document.getElementById('flight-info-component');
}
