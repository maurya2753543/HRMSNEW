import { NgModule } from '@angular/core';

import { EmployeeRoutingModule } from './employee-routing.module';
import { CommonEntitiesModule } from '../common-entities.module';
import { EmployeeComponent } from 'src/app/modules/employee/employee/employee.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmployeeWorkspaceComponent } from './employee-workspace/employee-workspace.component';
import { TimesheetComponent } from 'src/app/components/timesheet/timesheet.component';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeWorkspaceComponent,
   
   
  ],
  imports: [
    EmployeeRoutingModule,
    NgxPaginationModule,
    CommonEntitiesModule
  ]
})
export class EmployeeModule { }
