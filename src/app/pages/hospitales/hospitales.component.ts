import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/models/hospital.model';
import { HospitalService } from 'src/app/services/service.index';
import { ModalUploadService } from 'src/app/components/modal-upload/modal-upload.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: []
})
export class HospitalesComponent implements OnInit {


  totalRegistros:number = 0;

  cargando:boolean = true;

  desde:number = 0;

  hospitales:Hospital[] = [];

  constructor(
    public _hospitalService:HospitalService,
    public _modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {

    this.cargarHospitales();
    this._modalUploadService.notificacion
              .subscribe(() => this.cargarHospitales());
  }


  buscarHospitales(termino:string){

    if(termino.length <= 0){

      this.cargarHospitales();

      return;

    }

    this.cargando=true;

    this._hospitalService.buscarHospitales(termino)
          .subscribe((hospitales:Hospital[]) => {

            this.hospitales = hospitales;
            this.cargando = false;
            
          });
    
}

  borrarHospital(hospital:Hospital){

    Swal.fire({
      title: 'Estas seguro?',
      text: "Estas a punto de borrar a "+ hospital.nombre,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar hospital!'
    }).then((result) => {

        //console.log(result);
        
      if (result.value) {

        this._hospitalService.borrarHospital(hospital._id)
          .subscribe(resp =>{

            //console.log(resp);

            Swal.fire(
              'Hspital borrado!',
              'El hispital ha sido eliminado correctamente',
              'success'
            );

            this.cargarHospitales();

          });
      
      }

    })
  
    }

  actualizarImagen(id:string){
    this._modalUploadService.mostrarModal('hospitales',id);
  }

  cargarHospitales(){

    this.cargando = true;

    this._hospitalService.caragarHospitales(this.desde)
        .subscribe((resp:any) =>{
         
          this.totalRegistros = resp.total
          this.hospitales = resp.hospitales;

          this.cargando = false;
          
        });

  }

  actualizarHospital(hospital:Hospital){
          
      this._hospitalService.actalizarhospital(hospital)
      .subscribe();
  }
  
  
  guardarHospital(hospital:string){
          
      this._hospitalService.crearHospital(hospital)
      .subscribe();
  }

  cambiarDesde(valor:number){
  
    let desde = this.desde + valor;
  
    //console.log(desde);
  
    if(desde>= this.totalRegistros){
      return;
    }
  
    if(desde<0){
      return;
    }
  
    this.desde += valor;
  
    this.cargarHospitales();
    
  
  }
  
  crearHospital(){

     Swal.fire({
      title: 'Ingresa el nombre del hospital',
       input: 'text',
       showCancelButton: true,
       inputPlaceholder: 'Nombre del hospital',
       inputValidator: (value) => {
         return !value && 'Necesitas escribir el nombre!'
       }
     }).then((result) => {

      if(result.value){
       
          //console.log(result);

          this._hospitalService.crearHospital(result.value)
                    .subscribe(()=> this.cargarHospitales());

          
        
      }

         
     });


  
  }

  


  
}
