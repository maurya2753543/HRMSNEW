import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from 'src/app/modules/client/client/client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';


const routes: Routes = [
  {
    path: '',
    component: ClientComponent
  },
  {
    path: 'details/:clientId',
    component: ClientDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
