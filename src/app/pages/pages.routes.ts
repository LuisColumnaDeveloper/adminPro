import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import {  AdminGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
const routesPages: Routes = [
    // {
    //     path:'',
    //     component:PagesComponent,
    //     canActivate:[LoginGuardGuard ],
    //     children:[
          {
            path:'dashboard',
            component:DashboardComponent,
            data:{titulo:'Dashboard'}
          },
          {path:'progress',component:ProgressComponent,data:{titulo:'Progress'}},
          {path:'graficas1',component:Graficas1Component,data:{titulo:'Gráficas'}},
          {path:'promesas',component:PromesasComponent,data:{titulo:'Promesas'}},
          {path:'rxjs',component:RxjsComponent,data:{titulo:'Observables'}},
          {path:'acount-settings',component:AcountSettingsComponent,data:{titulo:'Ajustes del Tema'}},
          {path:'perfil',component:ProfileComponent,data:{titulo:'Perfil de usuario'}},
          {path:'busqueda/:termino',component:BusquedaComponent,data:{titulo:'Buscador'}},


          //Mantenimiento
          {
            path:'usuarios',
            component:UsuariosComponent,
            data:{titulo:'Mantenimiento de Usuarios'},
            canActivate:[AdminGuard]
          },

          {path:'hospitales',component:HospitalesComponent,data:{titulo:'Mantenimiento de Hospitales'}},
          {path:'medicos',component:MedicosComponent,data:{titulo:'Mantenimiento de Médicos'}},
          {path:'medico/:id',component:MedicoComponent,data:{titulo:'Actualizar Médico'}},
          {path:'',redirectTo:'/dashboard',pathMatch:'full'}
      //   ]
      // }
];

@NgModule({
    imports: [RouterModule.forChild(routesPages)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
