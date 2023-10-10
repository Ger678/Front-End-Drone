import { Component } from '@angular/core';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent {


  models: any[] = [
    {
        "id": 1,
        "name": "yolov8.pt",
        "description": "Usado para la detección de carteles y reflectores",
        "size": "50MB"
    },
    {
        "id": 2,
        "name": "yolov7.pt",
        "description": "Optimizado para la identificación de vehículos y peatones",
        "size": "45MB"
    },
    {
        "id": 3,
        "name": "yolov6.pt",
        "description": "Especializado en la detección de animales en entornos naturales",
        "size": "48MB"
    },
    {
        "id": 4,
        "name": "yolov5.pt",
        "description": "Ideal para la vigilancia en interiores y detección de objetos pequeños",
        "size": "42MB"
    },
    {
        "id": 5,
        "name": "yolov4.pt",
        "description": "Perfecto para aplicaciones de reconocimiento facial y seguimiento de personas",
        "size": "55MB"
    }
]


}
