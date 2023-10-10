import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export interface Dron {
  nombre: string;
  numeroSerie: string;
  modelo: string;
  fabricante: string;
  inicioVuelo: Date;
  aterrizaje: Date;
}


@Component({
  selector: 'app-dron-information',
  templateUrl: './dron-information.component.html',
  styleUrls: ['./dron-information.component.css']
})


export class DronInformationComponent {

  dronInformacion = document.getElementById('dron-info-component');

  dronInfo() {
    html2canvas(document.body).then(canvas => {
        var imgData = canvas.toDataURL("image/png");
        document.body.appendChild(canvas);
    });
  }

  dron: Dron = {
    nombre: 'Dron DJI Air 2',
    numeroSerie: '123456789',
    modelo: 'Modelo XYZ',
    fabricante: 'Fabricante DL',
    inicioVuelo: new Date('2023-07-25'),
    aterrizaje: new Date('2023-07-15')
    // Agrega más propiedades según sea necesario
  };
}