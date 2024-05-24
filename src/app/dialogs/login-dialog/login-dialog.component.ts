import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/app/environment/config';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string, private personaService: PersonService,) {
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

      this.respuestaJson = await this.personaService.login(this.usuario, this.password);
      console.log(this.respuestaJson)
      if (this.respuestaJson['error']) {
        alert("ERROR " + this.respuestaJson['error'])
      }
      else {
        alert('Bienvenido!')
        environment.setUserSession(this.usuario);
        environment.setTokenUserSession(this.respuestaJson['acces_token']);
        environment.setRoleUserSession(this.respuestaJson['role']);
        // environment.setPermisosExtraUserSession(this.respuestaJson['permisos']);
        // environment.setAreaUserSession(this.respuestaJson['area']);        
        this.usuarioEvent.emit(true);
      }
    }
  }
}
