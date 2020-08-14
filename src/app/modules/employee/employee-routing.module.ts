import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from 'src/app/modules/employee/employee/employee.component';
import { EmployeeWorkspaceComponent } from './employee-workspace/employee-workspace.component';



const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent
  },
  {
    path: 'empdetails/:empId',
    component: EmployeeWorkspaceComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
