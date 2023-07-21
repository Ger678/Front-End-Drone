import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherConditionsComponent } from './weather-conditions.component';

describe('WeatherConditionsComponent', () => {
  let component: WeatherConditionsComponent;
  let fixture: ComponentFixture<WeatherConditionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherConditionsComponent]
    });
    fixture = TestBed.createComponent(WeatherConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
