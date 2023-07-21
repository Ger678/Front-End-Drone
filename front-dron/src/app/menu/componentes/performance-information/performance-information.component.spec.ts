import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceInformationComponent } from './performance-information.component';

describe('PerformanceInformationComponent', () => {
  let component: PerformanceInformationComponent;
  let fixture: ComponentFixture<PerformanceInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerformanceInformationComponent]
    });
    fixture = TestBed.createComponent(PerformanceInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
