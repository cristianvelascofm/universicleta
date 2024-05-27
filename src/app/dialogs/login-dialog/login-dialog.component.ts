import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/app/environment/config';
import { PersonService } from 'src/app/services/person.service';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  constructor(private spinner: SpinnerService, public dialogRef: MatDialogRef<LoginDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string, private personaService: PersonService, public dialog: MatDialog) {
  }

  usuario = ''
  password = ''
  hide = true;

  ngOnInit(): void {
  }


  // En el componente LoginPanel
  @Output() usuarioEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() usuarioLoggeado: EventEmitter<string> = new EventEmitter<string>();


  path: string = '';
  respuestaJson: any = {};
  async login() {
    if (this.usuario == '' || this.password == '') {
      alert('Debe ingresar todos los campos');
    }
    else {
      this.spinner.show()
      this.personaService.login(this.usuario, this.password).subscribe((response: any) => {
        console.log("Respuesta: ", response);
        this.respuestaJson = response;
        if (!response["error"]) {
          this.spinner.hide()
          environment.setUserSession(this.usuario)
          environment.setTokenUserSession(response["acces_token"])
          environment.setRoleUserSession(response["role"])
          alert("Bienvenido");
          this.dialogRef.close();
        } else {
          this.spinner.hide()
          alert("Error: " + response["error"])
        }
      })
    }
  }


  registrar() {
    const dialogRef = this.dialog.open(RegisterDialogComponent, {
      disableClose: false,
      width: '580px',
    });
    dialogRef.afterClosed().subscribe(res => {
    })
  }
}
