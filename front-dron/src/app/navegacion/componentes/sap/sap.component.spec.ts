import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAPComponent } from './sap.component';

describe('SAPComponent', () => {
  let component: SAPComponent;
  let fixture: ComponentFixture<SAPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SAPComponent]
    });
    fixture = TestBed.createComponent(SAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
