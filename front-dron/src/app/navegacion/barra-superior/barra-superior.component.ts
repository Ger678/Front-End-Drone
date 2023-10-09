import { Component, OnInit, EventEmitter, Output, ViewChild, AfterViewInit, ViewChildren } from '@angular/core';
import { Router,NavigationEnd, ActivatedRoute, UrlSegment} from '@angular/router';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { DronInformationComponent } from 'src/app/menu/componentes/dron-information/dron-information.component';
import { FlightInformationComponent } from 'src/app/menu/componentes/flight-information/flight-information.component';
import { PilotInformationComponent } from 'src/app/menu/componentes/pilot-information/pilot-information.component';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css'],
})
export class BarraSuperiorComponent implements OnInit, AfterViewInit {
  rutaActual: string = '';
  pestaniaSap: boolean = false;
  @Output() sapTabClick: EventEmitter<any> = new EventEmitter();
  @ViewChild (DronInformationComponent) _dronInformation!: DronInformationComponent;
  @ViewChild (FlightInformationComponent) _flightInformation!: FlightInformationComponent;
  @ViewChild (PilotInformationComponent) _pilot!: PilotInformationComponent;

  constructor(
    private route: Router, 
    private activeRoute: ActivatedRoute,){}

  ngOnInit() {
    this.activeRoute.url.subscribe((urlSegments) => {
      this.rutaActual = urlSegments[0].path;
      this.pestaniaSap = this.rutaActual === 'sap';
    });

    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const ruta = event.urlAfterRedirects || event.url;
        this.rutaActual = ruta.split('?')[0];
        this.pestaniaSap = this.rutaActual === 'sap';
      }
    });
  }

  ngAfterViewInit() {
    console.log("dron", this._dronInformation);
    console.log("flight", this._flightInformation.flights);
    console.log("pilot", this._pilot.pilots);
  }

  mostrarMenuSapClick() {
    this.sapTabClick.emit(false);
  }

  // Create and download PDF

  downloadPDF(): void {
    // create an instance
    const doc = new jsPDF();
    let input = document.getElementById('print');
    // elementos del DOM
    let dron = this._dronInformation;
    let flightInfo = this._flightInformation.flights;
    const pilot = this._pilot.pilots;

    var elements = [dron, flightInfo, pilot];

    doc.internal.scaleFactor = 2.25;

    console.log()
  //   html2canvas(img).then(function (canvas) {
  //     var imgData = canvas.toDataURL("image/png");
  //     document.body.appendChild(canvas);
  //     doc.addImage(imgData, 'PNG', 10, 10, 190, 190);
  //     doc.save();
  // });
    
    
    // function generatePages(elements: any[]){
    //   for (let i = 0; i !== elements.length; i++){
    //     document.getElementById(elements[i])!;
    //     input = document.createElement("input");
    //     processPage(input, i, elements.length -1);
    //   }
    // }
    // function processPage(input: any, index: any, end:any){
    //   const formatPage = (canvas:any)=>{
    //     const imgData = canvas.toDataURL('assets/img');
    //     doc.addImage(imgData, 'JPEG', 10, 10, 200, 100, '', 'FAST', 0);
    //   }
    //   return html2canvas(input).then(canvas => {
    //   formatPage(canvas);
    //   doc.save("dowload.pdf")
    //   if (index < end) {
    //     doc.addPage();
    //   } else {
    //     doc.save('download.pdf');
    //   }
    // })
    // };
    // generatePages(elements);
    // console.log(elements);
    // html2canvas(elements).then((canvas)=>{
    //   const imageData = canvas.toDataURL('assets/img');
    //   doc.addImage(imageData, 'PNG', 10, 10, 190, 190);
    //   doc.save();
    // })
  }
}
