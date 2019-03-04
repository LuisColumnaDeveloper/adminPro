import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import {  Router } from '@angular/router';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';
import { Hospital } from 'src/app/models/hospital.model';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})

export class HospitalService {

  constructor(public _subirarchivoServece:SubirArchivoService,
              public _usuarioService:UsuarioService,
              public http:HttpClient) { }



  caragarHospitales(desde:number = 0){

    let url = URL_SERVICIOS + '/hospital?desde=' + desde;

    return this.http.get(url);

  }


  obtenerHospital(id:string){

    let url = URL_SERVICIOS+'/hospital/'+id;

    return this.http.get(url)
                .pipe(
                  map((resp:any) =>resp.hospital)
                )

  }

  borrarHospital(id:string){

    let url = URL_SERVICIOS+'/hospital/'+ id;

    url+='?token='+this._usuarioService.token;

    return this.http.delete(url);
  }

  crearHospital(nombre:string){

    let url = URL_SERVICIOS + '/hospital';

    url+='?token='+this._usuarioService.token;

    return this.http.post(url,{nombre})
          .pipe(
              map((resp:any) =>{
                
                Swal.fire(
                  'Hospital creado!',
                  resp.hospital.nombre,
                  'success'
                )
                  return resp;
              })
          );

  }

  buscarHospitales(termino:string){

    let url = URL_SERVICIOS+'/busqueda/coleccion/hospitales/'+termino;

    return this.http.get(url)
            .pipe(map( (resp:any) => resp.hospitales));

  }

  actalizarhospital(hospital:Hospital){
    let url =URL_SERVICIOS+'/hospital/'+hospital._id;
    url+='?token='+this._usuarioService.token;

    
    return this.http.put(url,hospital)
               .pipe(map((resp:any) =>{
                
              
                  Swal.fire(
                    'Hospital actualizado',
                    resp.hospital.nombre,
                    'success'
                  );

                  return true;
               }));
  }

  
}
