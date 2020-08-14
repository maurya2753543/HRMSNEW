import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { HomeRoutingModule } from './home-routing.module';
import { CommonEntitiesModule } from '../common-entities.module';
import { HomeComponent } from 'src/app/modules/home/home/home.component';
import { HomeInfoCardComponent } from 'src/app/components/home-info-card/home-info-card.component';
import { EmpBillingTrendsComponent } from 'src/app/components/emp-billing-trends/emp-billing-trends.component';
import { EmpTypeTrendsComponent } from 'src/app/components/emp-type-trends/emp-type-trends.component';
import { OverallProjectTrendsComponent } from 'src/app/components/overall-project-trends/overall-project-trends.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeInfoCardComponent,
    EmpBillingTrendsComponent,
    EmpTypeTrendsComponent,
    OverallProjectTrendsComponent
  ],
  imports: [
    HomeRoutingModule,
    ChartsModule,
    CommonEntitiesModule
  ]
})
export class HomeModule { }
