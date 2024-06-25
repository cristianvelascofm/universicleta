import { Component, OnInit } from '@angular/core';
import { environment } from 'src/app/environment/config';

@Component({
  selector: 'app-main-module',
  templateUrl: './main-module.component.html',
  styleUrls: ['./main-module.component.scss']
})
export class MainModuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.islogged()
  }
  home = true
  nosotros = false
  comoFunciona = false
  entrega = false
  reserva = false
  cuenta = false


  islogged() {
    if (environment.getUserSession() == 'null') {
      this.home = true;
      this.nosotros = false;
      this.comoFunciona = false
      this.entrega = false
      this.reserva = false
      this.cuenta = false
    }
  }

  actualWindow(selector: string) {

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
        this.nosotros = true;
        this.entrega = false;
        this.reserva = false
        this.cuenta = false
        break;
      case 'funciona':
        console.log("comoFunciona");
        this.comoFunciona = true;
        this.home = false;
        this.nosotros = false;
        this.entrega = false;
        this.reserva = false;
        this.cuenta = false
        break;
      case 'cuenta':
        this.comoFunciona = false;
        this.home = false;
        this.nosotros = false;
        this.entrega = false;
        this.reserva = false
        this.cuenta = true
        break;

        case 'reservar':
          this.comoFunciona = false;
          this.home = false;
          this.nosotros = false;
          this.entrega = false;
          this.reserva = true
          this.cuenta = false
          break;
      default:
        // Manejo para un valor no válido de selector
        break;
    }
  }
}
