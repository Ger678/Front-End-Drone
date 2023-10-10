import { Component } from '@angular/core';

export interface AIPerformanceMetrics {
  imageRecognitionSuccessRate: number;
  errorsIdentified: number;
}

@Component({
  selector: 'app-ai-maintence-metrics',
  templateUrl: './ai-maintence-metrics.component.html',
  styleUrls: ['./ai-maintence-metrics.component.css']
})
export class AiMaintenceMetricsComponent {
  aiMetrics: AIPerformanceMetrics = {
    imageRecognitionSuccessRate: 90, // en porcentaje
    errorsIdentified: 5
  };

  constructor(){}


  results: any = 'assets/IA/results.png'; 
  batch: string = 'assets/IA/val_batch1_pred.jpg';
}
