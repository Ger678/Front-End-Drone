import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectStatusEvaluationComponent } from './object-status-evaluation.component';

describe('ObjectStatusEvaluationComponent', () => {
  let component: ObjectStatusEvaluationComponent;
  let fixture: ComponentFixture<ObjectStatusEvaluationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjectStatusEvaluationComponent]
    });
    fixture = TestBed.createComponent(ObjectStatusEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
