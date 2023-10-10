import { Component } from '@angular/core';

export interface Pilot{
  pilotID: string;
  pilotName: string;
  ANAC: string;
}

@Component({
  selector: 'app-pilot-information',
  templateUrl: './pilot-information.component.html',
  styleUrls: ['./pilot-information.component.css']
})
export class PilotInformationComponent {
  pilots: Pilot[] = [
    {
      pilotID: 'P001',
      pilotName: 'German Aguirre',
      ANAC: '12345-5'
    }
  ];
}
