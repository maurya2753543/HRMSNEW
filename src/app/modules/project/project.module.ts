import { NgModule } from '@angular/core';

import { ProjectRoutingModule } from './project-routing.module';
import { CommonEntitiesModule } from '../common-entities.module';
import { ProjectComponent } from 'src/app/modules/project/project/project.component';
import { ProjectDetailCardComponent } from 'src/app/components/project-detail-card/project-detail-card.component';
import { TimesheetComponent } from 'src/app/components/timesheet/timesheet.component';
import { TimesheetDetailCardComponent } from 'src/app/components/timesheet-detail-card/timesheet-detail-card.component';
import { TimesheetEntriesComponent } from 'src/app/components/timesheet-entries/timesheet-entries.component';
import { ProjectWorkspaceComponent } from 'src/app/modules/project/project-workspace/project-workspace.component';
import { TimesheetApprovalComponent } from 'src/app/components/timesheet-approval/timesheet-approval.component';
import { EmpTimesheetDetailCardComponent } from 'src/app/components/emp-timesheet-detail-card/emp-timesheet-detail-card.component';
import { TimesheetWorkspaceComponent } from 'src/app/components/timesheet-workspace/timesheet-workspace.component';
import { TeamMemberComponent } from 'src/app/components/team-member/team-member.component';



@NgModule({
  declarations: [
    ProjectComponent,
    ProjectDetailCardComponent,
    TimesheetComponent,
    TimesheetDetailCardComponent,
    TimesheetEntriesComponent,
    ProjectWorkspaceComponent,
    TimesheetApprovalComponent,
    EmpTimesheetDetailCardComponent,
    TimesheetWorkspaceComponent,
    TeamMemberComponent
  ],
  imports: [
    ProjectRoutingModule,
    CommonEntitiesModule
  ]
})
export class ProjectModule { }
