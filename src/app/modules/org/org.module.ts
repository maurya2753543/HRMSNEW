import { NgModule } from '@angular/core';

import { OrgRoutingModule } from './org-routing.module';
import { CommonEntitiesModule } from '../common-entities.module';

import { OrganizationComponent } from 'src/app/modules/org/organization/organization.component';
import { OrgDetailCardComponent } from 'src/app/components/org-detail-card/org-detail-card.component';
import { CreateUpdateOrgComponent } from '../../components/create-update-org/create-update-org.component';
import { OrganizationDetailsComponent } from './organization-details/organization-details.component';




@NgModule({
  declarations: [
    OrganizationComponent,
    OrgDetailCardComponent,
    CreateUpdateOrgComponent,
    OrganizationDetailsComponent
  ],
  imports: [
    OrgRoutingModule,
    CommonEntitiesModule
  ]
})
export class OrgModule { }
