import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.css']
})
export class VuelosComponent {
  vuelosPendientes: any[];
  filaSeleccionada: number = -1; // Indica la fila seleccionada (-1 significa ninguna seleccionada)
  vuelosFiltrados: any[]; // Array para almacenar los vuelos filtrados
  filtros: any = {}; // Objeto para almacenar los valores de los filtros
  menusDesplegables: any = {};

  constructor(private http: HttpClient){
    this.vuelosPendientes = [];
    this.vuelosFiltrados = [];
  }

  ngOnInit() {
    this.http.get<any[]>('../assets/vuelos.json').subscribe(data => {
      this.vuelosPendientes = data;
      this.vuelosFiltrados = [...this.vuelosPendientes]
    });
    console.log('vuelosFiltrados')
  }

  mostrarMenu(columna: string) {
    if (!this.menusDesplegables[columna]){
      this.cerrarMenuesDesplegables();
      this.menusDesplegables[columna] = true;
    console.log('mostrarMenu');

    } else {
      this.cerrarMenuesDesplegables();
    console.log('No mostrarMenu');

    }
  }

  cerrarMenuesDesplegables() {
    this.menusDesplegables = [];
  }

  aplicarFiltros() {
    this.vuelosFiltrados = this.vuelosPendientes.filter((vuelo) => {
      for (const key in this.filtros) {
        if (vuelo[key] !== this.filtros[key]) {
        console.log('aplicarFiltros');
          return false;
        }
      }
      console.log('aplicarFiltros');
      return true;
    });
  }

  seleccionarFila(index: number) {
    this.filaSeleccionada = index;
  }

  ejecutarPlan() {
    if (this.filaSeleccionada !== -1) {
      const filaSeleccionada = this.vuelosPendientes[this.filaSeleccionada];
      // Lógica para ejecutar el plan seleccionado
      console.log('Plan ejecutado:', filaSeleccionada);
    }
  }
}
