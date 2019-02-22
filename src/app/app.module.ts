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


//Servicios



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    PagesModule,//se pone primero para dar prioridad a las rutas
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
