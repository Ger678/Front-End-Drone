import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotInformationComponent } from './pilot-information.component';

describe('PilotInformationComponent', () => {
  let component: PilotInformationComponent;
  let fixture: ComponentFixture<PilotInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PilotInformationComponent]
    });
    fixture = TestBed.createComponent(PilotInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
