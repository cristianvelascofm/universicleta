import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from 'src/app/dialogs/login-dialog/login-dialog.component';
import { environment } from 'src/app/environment/config';
import { UniversicletaService } from 'src/app/services/universicleta.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog, private universicletaService: UniversicletaService) {

  }

  home = true;
  atenciones = false;
  proyectos = false;
  place = false;
  finance = false;
  agenda = false;
  registro = false;
  currentYear = new Date().getFullYear();
  selectedItem: string = 'home';
  ngOnInit(): void {
    this.loginVerificator()
  }
  title: string = 'Logo'
  logged = false

  @Output()
  menuSelector: EventEmitter<string> = new EventEmitter<string>();

  reservar() {
    if (this.logged == false) {
      const dialogRef = this.dialog.open(LoginDialogComponent, {
        disableClose: false,
        width: '450px',
        // height: '800px'
        data: {
          title: 'Iniciar Sesión',
          logged: this.logged
        }
      });
      dialogRef.afterClosed().subscribe(res => {
        this.loginVerificator()

      })
    } else {
      this.goTo('reservar')
    }

  }



  goTo(window: string) {
    this.selectedItem = window
    this.menuSelector.emit(window);

  }

  logout() {
    localStorage.clear()
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
    swal.fire('¡Notificación!', "Sesión Finalizada", 'warning');
    window.location.href = "/";

  }


  ping() {
    console.log("Realizando Ping...")
    this.universicletaService.ping().subscribe(res => {
      console.log("Respuesta 8266: ", res)
    })
  }


  loginVerificator() {
    if (environment.getUserSession() != 'null') {
      this.logged = true
    }
    else {
      this.logged = false
    }
  }
}
