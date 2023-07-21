import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightInformationComponent } from './flight-information.component';

describe('FlightInformationComponent', () => {
  let component: FlightInformationComponent;
  let fixture: ComponentFixture<FlightInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightInformationComponent]
    });
    fixture = TestBed.createComponent(FlightInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
