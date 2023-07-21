import { Component } from '@angular/core';

export interface Dron {
  nombre: string;
  numeroSerie: string;
  modelo: string;
  fabricante: string;
  fechaFabricacion: Date;
  fechaAdquisicion: Date;
}

@Component({
  selector: 'app-dron-information',
  templateUrl: './dron-information.component.html',
  styleUrls: ['./dron-information.component.css']
})

export class DronInformationComponent {

  dron: Dron = {
    nombre: 'Mi Dron',
    numeroSerie: '123456789',
    modelo: 'Modelo XYZ',
    fabricante: 'Fabricante ABC',
    fechaFabricacion: new Date('2023-07-25'),
    fechaAdquisicion: new Date('2023-07-15')
    // Agrega más propiedades según sea necesario
  };
}

