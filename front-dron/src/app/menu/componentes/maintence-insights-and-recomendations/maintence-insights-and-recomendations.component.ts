import { Component } from '@angular/core';

export interface MaintenanceInsights {
  criticalObservations: string;
  recommendedActions: string;
  estimatedTimeForNextMaintenance: string;
  otherComments: string;
}

@Component({
  selector: 'app-maintence-insights-and-recomendations',
  templateUrl: './maintence-insights-and-recomendations.component.html',
  styleUrls: ['./maintence-insights-and-recomendations.component.css']
})
export class MaintenceInsightsAndRecomendationsComponent {
  maintenanceInsights: MaintenanceInsights = {
    criticalObservations: 'Some components show signs of wear and tear.',
    recommendedActions: 'Schedule maintenance to replace worn-out components.',
    estimatedTimeForNextMaintenance: '3 weeks',
    otherComments: 'Ensure the replacement components are of high quality.'
  };
}
