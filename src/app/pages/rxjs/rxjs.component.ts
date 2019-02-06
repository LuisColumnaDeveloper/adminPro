import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, pipe, Subscription } from 'rxjs';

import { retry,map, filter } from "rxjs/operators";


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit,OnDestroy {

  suscription:Subscription;


  constructor() { 
    
    this.suscription = this.regresaObservable()
    // .pipe(
    //   retry(2)
    // )
    .subscribe(
      numero => console.log('Subs',numero),
      error => console.error('Error',error),
      () => console.log('El observador termino!')
      );

  }

  ngOnInit() {
  }

  ngOnDestroy() {

    console.log("La página se va a cerrar");
    this.suscription.unsubscribe();

  }

  regresaObservable():Observable< any >{
    return  new Observable( (observer:Subscriber<any>) =>{

      let contador =0;
      let intervalo = setInterval(()=>{
        
        contador += 1;

        const salida ={
          valor:contador
        };

        observer.next(salida );

        // if(contador===3){
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if(contador===2){
        //   //clearInterval(intervalo);
        //   observer.error('Auxilio');
        // }

      },1000)


    }).pipe(
        map(resp => resp.valor),
          filter((valor,index)=>{
            if(valor % 2===1){
              return true;
    
            }else{
              return false
            }
          })
      );
  }

}
