import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DronInformationComponent } from './dron-information.component';

describe('DronInformationComponent', () => {
  let component: DronInformationComponent;
  let fixture: ComponentFixture<DronInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DronInformationComponent]
    });
    fixture = TestBed.createComponent(DronInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
