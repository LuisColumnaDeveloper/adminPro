import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routing principal
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

//Modules
import { PagesModule } from './pages/pages.module';
import { ServiceModule } from './services/service.module';

//temporal
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';



//Servicios



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
