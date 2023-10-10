import { Component, OnInit, EventEmitter, Output, ViewChild, AfterViewInit, ViewChildren } from '@angular/core';
import { Router,NavigationEnd, ActivatedRoute, UrlSegment} from '@angular/router';
import { jsPDF } from 'jspdf';
import { DataService } from 'src/app/menu/services/data.service';
import autoTable from 'jspdf-autotable'


@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css'],
})
export class BarraSuperiorComponent implements OnInit {
  rutaActual: string = '';
  pestaniaSap: boolean = false;
  @Output() sapTabClick: EventEmitter<any> = new EventEmitter();

  constructor(
    private route: Router, 
    private activeRoute: ActivatedRoute,
    private data: DataService){

    }

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
    this.downloadPDF();
    var data = this.data.getData()[0];
  }


  mostrarMenuSapClick() {
    this.sapTabClick.emit(false);
  }

  downloadPDF(): void {
    const doc = new jsPDF();
    doc.setFontSize(12);

    var data = this.data.getData()[0];

    const addPageIfNeeded = () => {
      if (yPos >= doc.internal.pageSize.getHeight() - 20) {
        doc.addPage();
        yPos = 20;
        addHeaderAndFooter();
      }
    };

    const addHeaderAndFooter = () => {
      doc.setFontSize(12);
      const date = new Date();
      const dateString = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
      doc.setLineWidth(0.5);
      doc.line(10, 10,doc.internal.pageSize.getWidth() - 10, 10);

      doc.setFontSize(10);
      doc.text(dateString, doc.internal.pageSize.getWidth() - 40, 7);

      doc.setPage(doc.getNumberOfPages());
      doc.setFontSize(12);

      doc.setLineWidth(0.5);
      doc.line(10, doc.internal.pageSize.getHeight() - 10, doc.internal.pageSize.getWidth() - 10, doc.internal.pageSize.getHeight() - 10);

      const pageCount = doc.getNumberOfPages();
      doc.text(`Página ${pageCount}`, doc.internal.pageSize.getWidth() - 30, doc.internal.pageSize.getHeight() - 5);
    };
    
    let yPos = 10;
    const lineHeight = 10;
    addHeaderAndFooter();

    doc.text('Informe de Dron', 10, 20);

    //content for dron
    const flight = data.flights;
    let flightData: any[] = [];

    flight.forEach((element: any) => {
      flightData.push([
        element.flightID,
        element.flightDate,
        element.flightDuration,
        element.flightPathCoordinates
      ]);
    });

    autoTable(doc,{
      head:[['Flight ID', 'Flight Date', 'Flight Duration', 'Flight Path Coordinates']],
      body: flightData,
      theme: 'grid',
      startY: 30
    })

    //content for dron
    const dron = data.dron;
    const flightPerformance = data.flightPerformance;
    const weather = data.weather;

    let dronData: any[] = [];
    dron.forEach((element: any) => {
      dronData.push([element.nombre, element.numeroSerie, element.modelo, element.fabricante, element.fechaFabricacion, element.fechaAdquisicion])
    });

    autoTable(doc, 
      {
      head: [['Nombre', 'Numero de Serie', 'Modelo', 'Fabricante', 'Fecha de Fabricacion', 'Fecha de Adquisicion']],
      body: dronData,
      theme: 'grid',
      startY: 50
    })

    autoTable(doc,{
      head: [[
        {
          content: 'Performance/Clima',
          colSpan: 2,
          styles: {halign: 'center'}
        }
      ]],
      body:[
        ['Velocidad ',`${flightPerformance.averageSpeed}`],
        ['Altitud Max',`${flightPerformance.maximumAltitude}`],
        ['Distancia Recorrida ',`${flightPerformance.totalDistanceTravelled}`],
        ['Bateria Usada', `${flightPerformance.batteryUsage}`]
      ],
      tableWidth: 'wrap',
      theme: 'grid',
      startY: 80,

    })
    autoTable(doc,
      {
        body:[
          ['Visibilidad', `${weather.visibility}`],
          ['Temperatura', `${weather.temperature}`],
          ['Humedad', `${weather.humidity}`],
          ['Velecidad del Viento',`${weather.windSpeed}`],
          ['Direccion del Viento',`${weather.windDirection}`],
        ],
        tableWidth: 'wrap',
        theme: 'grid',
        startY: 80,
        margin: {left: 66}
      })


      // Contenido para Maintenance Tasks (Tareas de Mantenimiento)
      const maintenanceTasks = data.maintenanceTasks;
      let maintenanceData: any[] = [];
      
      maintenanceTasks.forEach((elements: any)=>{
        maintenanceData.push([
          elements.taskID,
          elements.taskDescription,
          elements.taskStatus,
          elements.imagesCaptured
        ]);
      })
      
      autoTable(doc,{
        head: [['Tarea ID', 'Description', 'Estado', 'Imagenes']],
        body: maintenanceData,
        theme: 'grid',
      })

    // Contenido para Object Status Evaluation (Evaluación del Estado del Objeto)
    const objectStatuses = data.objectStatuses;
    let objectData: any[] = [];

    objectStatuses.forEach((elements: any)=>{
      objectData.push([
        elements.objectID,
        elements.objectDescription,
        elements.objectCoordinates,
        elements.imagesCaptured,
        elements.preInspectionStatus,
        elements.suggestedMaintenanceActions,
      ]);
    })

    doc.text('Tareas realizadas', 10, 160);

    autoTable(doc,{
      head: [['ID', 'Description', 'Coordenadas', 'Imagenes', 'Pre Status','Recomendaciones']],
      body: objectData,
      theme: 'grid',
      styles: { overflow: 'ellipsize', cellWidth: 'wrap' },
      rowPageBreak: 'auto',
      startY: 170,
    });

    // Contenido para Maintenance Insights & Recommendations (Percepciones y Recomendaciones de Mantenimiento)
    const maintenanceInsights = data.maintenanceInsights;
    let maintenanceInsightsData: any[] = [];

    maintenanceInsights.forEach((elements: any) => {
      maintenanceInsightsData.push([
        elements.criticalObservations,
        elements.recommendedActions,
        elements.estimatedTimeForNextMaintenance,
        elements.otherComments
      ]);
    })
    autoTable(doc,{
      head:[['Observaciones', 'Recomendaciones', 'Proximo Mantenimiento', 'Comentarios']],
      body:maintenanceInsightsData,
      theme: 'grid',
    })

    addPageIfNeeded();

    // Contenido para Pilots (Pilotos)
    const pilots = data.pilots;
    let pilotsData: any[] = [];

    pilots.forEach((elements: any)=>{
      pilotsData.push([
        elements.pilotID,
        elements.pilotName
      ])
    });

    autoTable(doc,{
      head: [['Pilot ID', 'Pilot Name']],
      body: pilotsData,
      theme: 'grid',
    })

    // Contenido para AI Performance Metrics (Métricas de Rendimiento de IA)
    const aiMetrics = data.aiMetrics;    
    autoTable(doc, {
      head:[['Reconocimiento', 'Errores']],
      body: [[aiMetrics.imageRecognitionSuccessRate, aiMetrics.errorsIdentified]],
      theme: 'grid',
    })

    addPageIfNeeded();

    // Contenido para Safety & Compliance (Seguridad y Cumplimiento)
    const safetyInfo = data.safetyInfo;
    autoTable(doc,{
      head:[['Incidentes Reportados','Casi Accidentes','Estado de Cumplimiento Regulatorio']],
      body: [[safetyInfo.incidentsReported, safetyInfo.nearMisses, safetyInfo.regulatoryComplianceStatus]],
      theme: 'grid',
    })

    // Contenido para Attachments (Adjuntos)
    const attachments = data.attachments;
    let attachmentsData: any[] = [];

    attachments.forEach((elements: any) => {
      attachmentsData.push([
        elements.type,
        elements.filename
      ])
      console.log(attachmentsData)
    })

    // const img = new Image();
    // img.src = '/assets/IA/results.png';
    
    // console.log(doc.addImage(img, 'JPEG', 10, 10, 200, 200));
      



    var string = doc.output('datauristring');
    var embed = "<embed width='100%' height='100%' src='" + string + "'/>"
    var x = window.open();
    x!.document.open();
    x!.document.write(embed);
    x!.document.close();
  }
}
