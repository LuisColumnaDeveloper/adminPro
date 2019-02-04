import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress:ElementRef;
  @Input('nombre') leyenda:string='Leyenda';
  @Input() porcentaje:number= 50;
  

  //emitir cambio de valor
  @Output() valor:EventEmitter<number> = new EventEmitter();

  constructor() { 
    //console.log('Leyenda',this.leyenda);
    //console.log('porcentaje',this.porcentaje);
    
  }

  ngOnInit() {
    //console.log('Leyenda',this.leyenda);
    console.log('porcentaje',this.porcentaje);
  }

  cambiarValor(valor:number){
    if(this.porcentaje>=100 && valor>0){
      return;
    }
    if(this.porcentaje<=0 && valor < 0){
      return;
    }


    this.porcentaje=this.porcentaje + valor;
    this.valor.emit(this.porcentaje);

    this.txtProgress.nativeElement.focus();

  }

  onChange(valor:number){

    //let elemHTML:any = document.getElementsByName('porcentaje')[0];
    
    //console.log(this.txtProgress);
    
    console.log(valor);
    if(valor>=100){
      this.porcentaje=100;
    }else if(valor <=0){
      this.porcentaje=0;
    }else{
      this.porcentaje=valor;
    }

    //elemHTML.value= Number(this.porcentaje);

    this.txtProgress.nativeElement.value=this.porcentaje;

   

    this.valor.emit(this.porcentaje);
    

  }

}
