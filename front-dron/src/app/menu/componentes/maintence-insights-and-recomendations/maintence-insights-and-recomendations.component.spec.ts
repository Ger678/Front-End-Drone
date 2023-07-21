import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenceInsightsAndRecomendationsComponent } from './maintence-insights-and-recomendations.component';

describe('MaintenceInsightsAndRecomendationsComponent', () => {
  let component: MaintenceInsightsAndRecomendationsComponent;
  let fixture: ComponentFixture<MaintenceInsightsAndRecomendationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaintenceInsightsAndRecomendationsComponent]
    });
    fixture = TestBed.createComponent(MaintenceInsightsAndRecomendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
