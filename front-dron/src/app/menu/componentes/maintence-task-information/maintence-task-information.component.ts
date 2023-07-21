import { Component } from '@angular/core';

export interface MaintenanceTask {
  taskID: string;
  taskDescription: string;
  taskStatus: string;
  imagesCaptured: number;
}

@Component({
  selector: 'app-maintence-task-information',
  templateUrl: './maintence-task-information.component.html',
  styleUrls: ['./maintence-task-information.component.css']
})
export class MaintenceTaskInformationComponent {
  maintenanceTasks: MaintenanceTask[] = [
    {
      taskID: 'M001',
      taskDescription: 'Inspect propellers',
      taskStatus: 'Completed',
      imagesCaptured: 5
    },
    {
      taskID: 'M002',
      taskDescription: 'Check battery voltage',
      taskStatus: 'In Progress',
      imagesCaptured: 2
    },
  ];
}
