import { Component, OnInit } from '@angular/core';
import { resolveReflectiveProviders } from '@angular/core/src/di/reflective_provider';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { 
    

    this.contar().then(
//      () => console.log("Termino!")
        mensaje => console.log("Termino!",mensaje)
      //,() => console.log("Error")
    )
    .catch(error => console.error("Error en la promesa",error));

  }

  ngOnInit() {
  }

  contar():Promise<boolean>{
    return new Promise((resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval(()=>{
            
          contador+=1;
  
          console.log(contador);
          if(contador===3){
            
            //resolve();
            resolve(true);
  
            //reject();
            //reject('simplemente un error!');
            clearInterval(intervalo);
          }
  
        },1000 );
  
      });

      
  }

}
