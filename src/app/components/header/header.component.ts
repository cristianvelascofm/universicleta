import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from 'src/app/dialogs/login-dialog/login-dialog.component';
import { environment } from 'src/app/environment/config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.verificatorLogin()
  }
  title: string = 'Logo'
  logged = false


  reservar() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      disableClose: false,
      width: '350px',
      // height: '800px'
      // data: {      
      // }
    });
    dialogRef.afterClosed().subscribe(res => {
    this.verificatorLogin()

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


  verificatorLogin(){
    if (environment.getUserSession() != '' || environment.getUserSession() != undefined){
      this.logged = true
    }
    else{
      this.logged = false
    }
  }
}
