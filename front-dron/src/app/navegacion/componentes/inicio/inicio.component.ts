import { Component } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js/public_api';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  typed: NgxTypedJsModule = {
    strings: ['¡Hola!', 'Bienvenido a mi sitio web.'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  };

}
