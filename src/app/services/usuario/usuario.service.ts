import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';

import { map } from 'rxjs/operators';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    public http:HttpClient
    ) { 
    console.log('Servicio de usuario listo');
    
  }

  loginGoogle(token:string){

    let url = URL_SERVICIOS+'/login/google';

    return this.http.post(url,{token});

  }

  login(usuario:Usuario, recordar:boolean=false){


    if(recordar){

      localStorage.setItem('email',usuario.email);

    }else{
      localStorage.removeItem('email');
    }

    let url = URL_SERVICIOS + '/login';
    return this.http.post(url, usuario)
                    .pipe(
                      map(
                        (resp:any) => {
                      localStorage.setItem('id',resp.id);
                      localStorage.setItem('token',resp.token);
                      localStorage.setItem('usuario', JSON.stringify(resp.usuario));

                      return true;
                    }));
    

  }

  crearUsuario(usuario:Usuario){
    let url = URL_SERVICIOS + '/usuario';

    return this.http.post(url,usuario)
          .pipe(
              map((resp:any) =>{
                swal('usuario creado', usuario.email,'success');
                  return resp.usuario;
              })
          );
  }
}
