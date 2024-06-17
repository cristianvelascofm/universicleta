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



actualWindow(selector:string){
  
  switch (selector) {
    case 'home':
      this.home = true;
      this.nosotros = false;
      break; // Agregar break para evitar la ejecución del siguiente caso
    case 'funciona':
      this.comoFunciona = true;
      this.home = false;
      break; // Agregar break aquí también
    case 'cuenta':
     
      // this.feria = false;
      // this.location.go(this.location.path());
      // alert('Sesión Finalizada');
      // window.location.reload();
    break;
    default:
      // Manejo para un valor no válido de selector
      break;
  }
}
}
