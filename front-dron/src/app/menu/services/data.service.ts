import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: any[] = [
    {
      "dron": [
        {
        "nombre": "Mi Dron",
        "numeroSerie": "123456789",
        "modelo": "Modelo XYZ",
        "fabricante": "Fabricante ABC",
        "fechaFabricacion": "2023-07-25",
        "fechaAdquisicion": "2023-07-15"
      },
      {
        "nombre": "Mi Dron 1",
        "numeroSerie": "123456789",
        "modelo": "Modelo XYZ",
        "fabricante": "Fabricante ABC",
        "fechaFabricacion": "2023-07-25",
        "fechaAdquisicion": "2023-07-15"
      }
    ],
      "flights": [
        {
          "flightID": "F001",
          "flightDate": "2023-07-25",
          "flightDuration": "1 hora",
          "flightPathCoordinates": "lat1,lon1;lat2,lon2;lat3,lon3"
        }
      ],
      "pilots": [
        {
          "pilotID": "P001",
          "pilotName": "John Doe",
          "ANAC": "John Doe"
        },
        {
          "pilotID": "P002",
          "pilotName": "Jane Smith"
        }
      ],
      "maintenanceTasks": [
        {
          "taskID": "M001",
          "taskDescription": "Inspect propellers",
          "taskStatus": "Completed",
          "imagesCaptured": 5
        },
        {
          "taskID": "M002",
          "taskDescription": "Check battery voltage",
          "taskStatus": "In Progress",
          "imagesCaptured": 2
        }
      ],
      "flightPerformance": {
        "averageSpeed": 30 + "Mts/s",
        "maximumAltitude": 100 + "Mts",
        "totalDistanceTravelled": 5000 + "Mts",
        "batteryUsage": 50 + "%"
      },
      "weather": {
        "temperature": 25 + "°C",
        "humidity": 70 + "%",
        "windSpeed": 15 + "Km/Hs",
        "windDirection": "North",
        "visibility": 10,
      },
      "aiMetrics": {
        "imageRecognitionSuccessRate": 90,
        "errorsIdentified": 5
      },
      "objectStatuses": [
        {
          "objectID": "O001",
          "objectDescription": "Propeller",
          "objectCoordinates": "Latitude: 40.7128, Longitude: -74.0060",
          "imagesCaptured": 3,
          "preInspectionStatus": "Good",
          "suggestedMaintenanceActions": "None",
        },
        {
          "objectID": "O002",
          "objectDescription": "Battery",
          "objectCoordinates": "Latitude: 34.0522, Longitude: -118.2437",
          "imagesCaptured": 5,
          "preInspectionStatus": "Good",
          "suggestedMaintenanceActions": "Replace battery",
        },
        {
          "objectID": "O003",
          "objectDescription": "Reflector",
          "objectCoordinates": "Latitude: 34.0522, Longitude: -118.2437",
          "imagesCaptured": 5,
          "preInspectionStatus": "Good",
          "suggestedMaintenanceActions": "Replace battery",
        },
        {
          "objectID": "O004",
          "objectDescription": "Cartel",
          "objectCoordinates": "Latitude: 34.0522, Longitude: -118.2437",
          "imagesCaptured": 5,
          "preInspectionStatus": "Good",
          "suggestedMaintenanceActions": "Replace battery",
        },
      ],
      "safetyInfo": {
        "incidentsReported": 2,
        "nearMisses": 1,
        "regulatoryComplianceStatus": "Compliant"
      },
      "maintenanceInsights": [
        {
        "criticalObservations": "Some components show signs of wear and tear.",
        "recommendedActions": "Schedule maintenance to replace worn-out components.",
        "estimatedTimeForNextMaintenance": "3 weeks",
        "otherComments": "Ensure the replacement components are of high quality."
      },
        {
        "criticalObservations": "Some components show signs of wear and tear.",
        "recommendedActions": "Schedule maintenance to replace worn-out components.",
        "estimatedTimeForNextMaintenance": "3 weeks",
        "otherComments": "Ensure the replacement components are of high quality."
      },
        {
        "criticalObservations": "Some components show signs of wear and tear.",
        "recommendedActions": "Schedule maintenance to replace worn-out components.",
        "estimatedTimeForNextMaintenance": "3 weeks",
        "otherComments": "Ensure the replacement components are of high quality."
      },
        {
        "criticalObservations": "Some components show signs of wear and tear.",
        "recommendedActions": "Schedule maintenance to replace worn-out components.",
        "estimatedTimeForNextMaintenance": "3 weeks",
        "otherComments": "Ensure the replacement components are of high quality."
      },
    ],
      "attachments": [
        {
          "type": "Flight Path Map",
          "filename": "src/assets/IA/results.png"
        },
        {
          "type": "Maintenance Images",
          "filename": "src/assets/IA/val_batch1_pred.jpg"
        }
      ]
    }
    
  ];

  constructor() { }

  getData(): any[] { 
    return this.data;
  }
}
