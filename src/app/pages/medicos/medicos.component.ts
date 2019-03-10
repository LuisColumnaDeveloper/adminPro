import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/models/medico.model';
import { MedicoService, UsuarioService } from 'src/app/services/service.index';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: []
})
export class MedicosComponent implements OnInit {
  
  medicos:Medico[] =[];
  desde:number = 0;
  cargando:boolean = true;
  constructor(public _medicoService:MedicoService,
    public _usuarioService:UsuarioService,) { }

  ngOnInit() {

    this.cargarMedicos();
  }

  cargarMedicos(){

    this.cargando=true;

    this._medicoService.cargarMedicos(this.desde)
            .subscribe( medicos => {

              this.cargando=false;

              this.medicos = medicos;

            });
  }

  buscarMedicos(termino:string){

    this.cargando=true;

    if(termino.length <= 0){
        this.cargarMedicos();
        return;
    }
      
    this._medicoService.buscarMedicos(termino)
            .subscribe( medicos => {
              this.medicos = medicos
              this.cargando=false;
            });
  }

  borrarMedico(medico:Medico){
      

    Swal.fire({
      title: 'Estas seguro?',
      text: "Estas a punto de borrar a "+ medico.nombre,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar médico!'
    }).then((result) => {
        
      if (result.value) {

        this._medicoService.borrarMedico(medico._id)
        .subscribe( () => this.cargarMedicos());
      
      }

    })
    
  }

  cambiarDesde(valor:number){
  
    let desde = this.desde + valor;
  
    console.log(desde);
  
    if(desde>= this._medicoService.totalMedicos){
      return;
    }
  
    if(desde<0){
      return;
    }
  
    this.desde += valor;
  
    this.cargarMedicos();
    
  
  }

}
