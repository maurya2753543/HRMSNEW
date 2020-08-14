import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetEntriesComponent } from './timesheet-entries.component';

describe('TimesheetEntriesComponent', () => {
  let component: TimesheetEntriesComponent;
  let fixture: ComponentFixture<TimesheetEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
