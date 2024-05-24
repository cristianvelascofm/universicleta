import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from 'src/app/dialogs/login-dialog/login-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) {

  }
  title: string = 'Logo'


  reservar() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      disableClose: false,
      width: '350px',
      // height: '800px'
      // data: {      
      // }
    });
    dialogRef.afterClosed().subscribe(res => {
    })
  }

  home = true;
  atenciones = false;
  proyectos = false;
  place = false;
  finance = false;
  agenda = false;
  registro = false;
  currentYear = new Date().getFullYear(); selectedItem: string = 'home';

  goTo(selector: string) { }

  logout() { }
}
