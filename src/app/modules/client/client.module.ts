import { NgModule } from '@angular/core';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from 'src/app/modules/client/client/client.component';
import { ClientDetailCardComponent } from 'src/app/components/client-detail-card/client-detail-card.component';
import { CommonEntitiesModule } from '../common-entities.module';
import { CreateUpdateClientComponent } from '../../components/create-update-client/create-update-client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';


@NgModule({
  declarations: [
    ClientComponent,
    ClientDetailCardComponent,
    CreateUpdateClientComponent,
    ClientDetailsComponent
  ],
  imports: [
    ClientRoutingModule,
    CommonEntitiesModule
  ]
})
export class ClientModule { }
