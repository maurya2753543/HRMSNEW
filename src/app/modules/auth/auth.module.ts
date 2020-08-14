import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from 'src/app/modules/auth/login/login.component';
import { CommonEntitiesModule } from '../common-entities.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    AuthRoutingModule,
    CommonEntitiesModule
  ]
})
export class AuthModule { }
