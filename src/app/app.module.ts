import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './modules/app-routing.module';
import { CommonEntitiesModule } from './modules/common-entities.module';
import { LocalApiService } from './services/local-api.service';
import { AppComponent } from './components/root/app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { ElementRendererDirective } from './directives/element-renderer.directive';
import { LoadingComponent } from './components/loading/loading.component';
import { CreateUpdateEmployeeComponent } from './components/create-update-employee/create-update-employee.component';
import { CreateUpdateProjectComponent } from './components/create-update-project/create-update-project.component';



@NgModule({
  declarations: [ 
    AppComponent,
    MainMenuComponent,
    HeaderComponent,
    ElementRendererDirective,
    LoadingComponent,
    CreateUpdateEmployeeComponent,
    CreateUpdateProjectComponent,   
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      LocalApiService, { dataEncapsulation: false }
    ),
    CommonEntitiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
