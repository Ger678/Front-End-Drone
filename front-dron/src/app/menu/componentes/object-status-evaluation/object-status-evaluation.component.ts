import { Component } from '@angular/core';

export interface ObjectStatus {
  objectID: string;
  objectDescription: string;
  objectCoordinates: string;
  imagesCaptured: number;
  preInspectionStatus: string;
  postInspectionStatus: string;
  changeDetected: boolean;
  detailsOfChangeDetected: string;
  imageRecognitionConfidenceLevel: number;
  suggestedMaintenanceActions: string;
  maintenancePriority: string;
}

@Component({
  selector: 'app-object-status-evaluation',
  templateUrl: './object-status-evaluation.component.html',
  styleUrls: ['./object-status-evaluation.component.css']
})
export class ObjectStatusEvaluationComponent {
  objectStatuses: ObjectStatus[] = [
    {
      objectID: 'O001',
      objectDescription: 'Drone Propeller',
      objectCoordinates: '40.1234, -74.5678',
      imagesCaptured: 3,
      preInspectionStatus: 'Good',
      postInspectionStatus: 'Good',
      changeDetected: false,
      detailsOfChangeDetected: '',
      imageRecognitionConfidenceLevel: 95,
      suggestedMaintenanceActions: 'No action required',
      maintenancePriority: 'Low'
    },
    {
      objectID: 'O002',
      objectDescription: 'Battery Pack',
      objectCoordinates: '40.4321, -74.8765',
      imagesCaptured: 5,
      preInspectionStatus: 'Good',
      postInspectionStatus: 'Damaged',
      changeDetected: true,
      detailsOfChangeDetected: 'Crack on battery casing',
      imageRecognitionConfidenceLevel: 80,
      suggestedMaintenanceActions: 'Replace battery pack',
      maintenancePriority: 'High'
    },
  ];
}
