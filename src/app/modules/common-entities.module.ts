import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { StopClickPropgationDirective } from '../directives/stop-click-propgation.directive';
import { EmpDetailCardComponent } from '../components/emp-detail-card/emp-detail-card.component';
import { EntityInfoCardComponent } from '../components/entity-info-card/entity-info-card.component';

@NgModule({
  declarations: [
    StopClickPropgationDirective,
    EmpDetailCardComponent,
    EntityInfoCardComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    CKEditorModule
  ],
  exports: [
    StopClickPropgationDirective,
    EmpDetailCardComponent,
    EntityInfoCardComponent,
    
    CommonModule,
    AppMaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    CKEditorModule
  ]
})
export class CommonEntitiesModule { }
