import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component:PagesComponent,
  //   children:[
  //     {path:'dashboard',component:DashboardComponent},
  //     {path:'progress',component:ProgressComponent},
  //     {path:'graficas1',component:Graficas1Component},
  //     {path:'',redirectTo:'/dashboard',pathMatch:'full'}
  //   ]
  // },
  
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
   /* cualquier ruta o carcter vacio a a redirigir a*/
  //{path:'',redirectTo:'/dashboard',pathMatch:'full'},
  /* cualquier otra ruta que no este definida aqui*/
  {path:'**',component:NopagefoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{useHash:true}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
