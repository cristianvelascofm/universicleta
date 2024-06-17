import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from 'src/app/dialogs/login-dialog/login-dialog.component';
import { environment } from 'src/app/environment/config';
import { UniversicletaService } from 'src/app/services/universicleta.service';

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
  currentYear = new Date().getFullYear(); selectedItem: string = 'home';
  ngOnInit(): void {
    this.verificatorLogin()
  }
  title: string = 'Logo'
  logged = false

  @Output()
  menuSelector: EventEmitter <string> = new EventEmitter <string>();

  reservar() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      disableClose: false,
      width: '350px',
      // height: '800px'
      data: {
        title: 'Iniciar Sesión',
        logged: this.logged
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      this.verificatorLogin()

    })
  }



  goTo(window: string){
    this.menuSelector.emit(window);
   
  }

  logout() { }

  ping() {
    this.universicletaService.ping().subscribe(res => {
      console.log("Respuesta 8266: ", res)
    })
  }

  
  verificatorLogin() {
    if (environment.getUserSession() != 'null') {
      this.logged = true
    }
    else {
      this.logged = false
    }
  }
}
