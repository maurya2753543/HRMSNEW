import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetWorkspaceComponent } from './timesheet-workspace.component';

describe('TimesheetWorkspaceComponent', () => {
  let component: TimesheetWorkspaceComponent;
  let fixture: ComponentFixture<TimesheetWorkspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetWorkspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
