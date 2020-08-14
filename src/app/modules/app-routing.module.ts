import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/auth', 
    pathMatch: 'full'
  },
  {
    path: 'auth', 
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule)
  },
  {
    path: 'home',
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule)
  },
  {
    path: 'organization',
    loadChildren: () => import("./org/org.module").then((m) => m.OrgModule)
  },
  {
    path: 'client',
    loadChildren: () => import("./client/client.module").then((m) => m.ClientModule)
  },
  {
    path: 'project',
    loadChildren: () => import("./project/project.module").then((m) => m.ProjectModule)
  },
  {
    path: 'employee',
    loadChildren: () => import("./employee/employee.module").then((m) => m.EmployeeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
