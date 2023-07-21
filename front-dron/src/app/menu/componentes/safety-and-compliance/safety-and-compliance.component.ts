import { Component } from '@angular/core';

export interface SafetyAndComplianceInfo {
  incidentsReported: number;
  nearMisses: number;
  regulatoryComplianceStatus: string;
}

@Component({
  selector: 'app-safety-and-compliance',
  templateUrl: './safety-and-compliance.component.html',
  styleUrls: ['./safety-and-compliance.component.css']
})
export class SafetyAndComplianceComponent {
  safetyInfo: SafetyAndComplianceInfo = {
    incidentsReported: 2,
    nearMisses: 1,
    regulatoryComplianceStatus: 'Compliant'
  };
}
