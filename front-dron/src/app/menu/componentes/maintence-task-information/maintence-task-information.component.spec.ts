import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenceTaskInformationComponent } from './maintence-task-information.component';

describe('MaintenceTaskInformationComponent', () => {
  let component: MaintenceTaskInformationComponent;
  let fixture: ComponentFixture<MaintenceTaskInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaintenceTaskInformationComponent]
    });
    fixture = TestBed.createComponent(MaintenceTaskInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
