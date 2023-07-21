import { Component } from '@angular/core';

export interface Attachment {
  type: string;
  filename: string;
}

@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.css']
})
export class AttachmentsComponent {
  attachments: Attachment[] = [
    {
      type: 'Flight Path Map',
      filename: 'flight_path_map.jpg'
    },
    {
      type: 'Maintenance Images',
      filename: 'maintenance_image_1.jpg'
    },
    {
      type: 'Maintenance Images',
      filename: 'maintenance_image_2.jpg'
    },
  ];
}
