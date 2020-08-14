import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpTimesheetDetailCardComponent } from './emp-timesheet-detail-card.component';

describe('EmpTimesheetDetailCardComponent', () => {
  let component: EmpTimesheetDetailCardComponent;
  let fixture: ComponentFixture<EmpTimesheetDetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpTimesheetDetailCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpTimesheetDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
