import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiMaintenceMetricsComponent } from './ai-maintence-metrics.component';

describe('AiMaintenceMetricsComponent', () => {
  let component: AiMaintenceMetricsComponent;
  let fixture: ComponentFixture<AiMaintenceMetricsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiMaintenceMetricsComponent]
    });
    fixture = TestBed.createComponent(AiMaintenceMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
