import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizationComponent } from 'src/app/modules/org/organization/organization.component';
import { OrganizationDetailsComponent } from './organization-details/organization-details.component';


const routes: Routes = [
  {
    path: '',
    component: OrganizationComponent
  },
  {
    path: 'details/:orgId',
    component: OrganizationDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrgRoutingModule { }
