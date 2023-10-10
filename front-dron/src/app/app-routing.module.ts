import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DronInformationComponent } from './menu/componentes/dron-information/dron-information.component';
import { FlightInformationComponent } from './menu/componentes/flight-information/flight-information.component';
import { PilotInformationComponent } from './menu/componentes/pilot-information/pilot-information.component';
import { PerformanceInformationComponent } from './menu/componentes/performance-information/performance-information.component';
import { MaintenceTaskInformationComponent } from './menu/componentes/maintence-task-information/maintence-task-information.component';
import { WeatherConditionsComponent } from './menu/componentes/weather-conditions/weather-conditions.component';
import { AiMaintenceMetricsComponent } from './menu/componentes/ai-maintence-metrics/ai-maintence-metrics.component';
import { ObjectStatusEvaluationComponent } from './menu/componentes/object-status-evaluation/object-status-evaluation.component';
import { SafetyAndComplianceComponent } from './menu/componentes/safety-and-compliance/safety-and-compliance.component';
import { MaintenceInsightsAndRecomendationsComponent } from './menu/componentes/maintence-insights-and-recomendations/maintence-insights-and-recomendations.component';
import { AttachmentsComponent } from './menu/componentes/attachments/attachments.component';
import { SAPComponent } from './navegacion/componentes/sap/sap.component';
import { InicioComponent } from './navegacion/componentes/inicio/inicio.component';
import { HomeComponent } from './navegacion/componentes/home/home.component'
import { ReportComponent } from './navegacion/componentes/report/report.component';
import { TrainComponent } from './navegacion/componentes/train/train.component';
import { ModelsComponent } from './navegacion/componentes/models/models.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: 'inicio', component: InicioComponent},
  { path: 'home', component: HomeComponent},
  { path: 'report', component: ReportComponent},
  { path: 'train', component: TrainComponent},
  { path: 'models', component: ModelsComponent},
  { path: 'sap', component: SAPComponent, 
    children: [
      { path: 'sap/dron', component: DronInformationComponent},
      { path: 'sap/flight-information', component: FlightInformationComponent},
      { path: 'sap/pilot-information', component: PilotInformationComponent},
      { path: 'sap/performance-information', component: PerformanceInformationComponent},
      { path: 'sap/maintence-task-information', component: MaintenceTaskInformationComponent},
      { path: 'sap/weather-condition', component: WeatherConditionsComponent},
      { path: 'sap/ai-metrics-information', component: AiMaintenceMetricsComponent},
      { path: 'sap/object-status-evaluation', component: ObjectStatusEvaluationComponent},
      { path: 'sap/safety-and-compliance', component: SafetyAndComplianceComponent},
      { path: 'sap/maintence-insight-and-recomendations', component: MaintenceInsightsAndRecomendationsComponent},
      { path: 'sap/attachments', component: AttachmentsComponent},
    ]},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
