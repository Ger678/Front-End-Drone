import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyAndComplianceComponent } from './safety-and-compliance.component';

describe('SafetyAndComplianceComponent', () => {
  let component: SafetyAndComplianceComponent;
  let fixture: ComponentFixture<SafetyAndComplianceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SafetyAndComplianceComponent]
    });
    fixture = TestBed.createComponent(SafetyAndComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
