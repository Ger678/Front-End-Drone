import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {
  mostrarMenuSap: boolean = false;
  rutaActual: string = '';
  pestaniaSap: boolean = false;
  @Output() sapTabClick: EventEmitter<any> = new EventEmitter();

  constructor(private route: Router, private activeRoute: ActivatedRoute){}

  ngOnInit() {
    this.activeRoute.url.subscribe(urlSegments => {
      this.rutaActual = urlSegments[0].path;
      this.pestaniaSap = this.rutaActual === 'sap';
    });
  
    this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const ruta = event.urlAfterRedirects || event.url;
        this.rutaActual = ruta.split('?')[0];
        this.pestaniaSap = this.rutaActual === 'sap';
      }
    });
  }
  

  mostrarMenuSapClick(){
    this.sapTabClick.emit(false);
  }

}
