import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';
import { log } from 'util';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: String, tipo: String='usuario'): any {
    
    let url = URL_SERVICIOS + '/img';

    if(!img){
      return url + '/usuarios/xxx'
    }

    if(img.indexOf('https')>=0){

      return img;

    }

    switch (tipo) {
      case 'usuario':
           url+= '/usuarios/' + img;
        break;

      case 'medico':
           url+= '/medicos/' + img;
        break;

      case 'hospital':
           url+= '/hospitales/' + img;
        break;
    
      default:
          console.log('tipo d eimagen no existe, usuario, medicos, hospitales');;
          url+= '/usuarios/xxx'
        break;
    }

    return url;
  }

}
