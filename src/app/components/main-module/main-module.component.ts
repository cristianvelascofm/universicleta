import { Component } from '@angular/core';

@Component({
  selector: 'app-main-module',
  templateUrl: './main-module.component.html',
  styleUrls: ['./main-module.component.scss']
})
export class MainModuleComponent {
home = true
nosotros = false
comoFunciona = false
entrega = false
reserva = false
cuenta = false


actualWindow(selector:string){
  
  switch (selector) {
    case 'home':
      console.log("Home");
      this.home = true;
      this.nosotros = false;
      this.comoFunciona = false
      this.entrega = false
      this.reserva = false
      this.cuenta = false
      break; 

      case 'nosotros':
        this.comoFunciona = false;
        this.home = false;
        this.nosotros =true;
        this.entrega = false;
        this.reserva = false
        this.cuenta = false
        break;  
    case 'funciona':
      console.log("comoFunciona");
      this.comoFunciona = true;
      this.home = false;
      this.nosotros =false;
      this.entrega = false;
      this.reserva = false;
      this.cuenta = false
      break; 
    case 'cuenta':
      this.comoFunciona = false;
      this.home = false;
      this.nosotros =false;
      this.entrega = false;
      this.reserva = false
      this.cuenta = true
    break;
    default:
      // Manejo para un valor no válido de selector
      break;
  }
}
}
