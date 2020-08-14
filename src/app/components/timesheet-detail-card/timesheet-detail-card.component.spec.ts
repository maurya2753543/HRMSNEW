import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetDetailCardComponent } from './timesheet-detail-card.component';

describe('TimesheetDetailCardComponent', () => {
  let component: TimesheetDetailCardComponent;
  let fixture: ComponentFixture<TimesheetDetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetDetailCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
