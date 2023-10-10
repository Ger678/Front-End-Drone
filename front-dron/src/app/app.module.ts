// Librerías
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

// Componentes
import { AppComponent } from './app.component';

// Navegación
import { BarraSuperiorComponent } from './navegacion/barra-superior/barra-superior.component';
import { InicioComponent } from './navegacion/componentes/inicio/inicio.component';
import { SAPComponent } from './navegacion/componentes/sap/sap.component';
import { ServidorComponent } from './navegacion/componentes/servidor/servidor.component';

// Menú
import { MenuComponent } from './menu/menu.component';

// Componentes del menú
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
import { VuelosComponent } from './vuelos/vuelos.component';
import { LoginComponent } from './navegacion/componentes/inicio/login/login.component';
import { HomeComponent } from './navegacion/componentes/home/home.component';
import { ReportComponent } from './navegacion/componentes/report/report.component';
import { TrainComponent } from './navegacion/componentes/train/train.component';
import { ModelsComponent } from './navegacion/componentes/models/models.component';

@NgModule({
  declarations: [
    // Componentes principales
    AppComponent,
    BarraSuperiorComponent,
    InicioComponent,
    SAPComponent,
    ServidorComponent,
    MenuComponent,

    // Componentes del menú
    DronInformationComponent,
    FlightInformationComponent,
    PilotInformationComponent,
    PerformanceInformationComponent,
    MaintenceTaskInformationComponent,
    WeatherConditionsComponent,
    AiMaintenceMetricsComponent,
    ObjectStatusEvaluationComponent,
    SafetyAndComplianceComponent,
    MaintenceInsightsAndRecomendationsComponent,
    AttachmentsComponent,
    VuelosComponent,
    LoginComponent,
    HomeComponent,
    ReportComponent,
    TrainComponent,
    ModelsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxTypedJsModule,
    NoopAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
