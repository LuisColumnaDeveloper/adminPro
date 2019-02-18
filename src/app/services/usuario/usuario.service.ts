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