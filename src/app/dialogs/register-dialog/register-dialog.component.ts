import { Component, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent {
  constructor(private elementRef: ElementRef) {
  }

  path: string = '';

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  hideP = true;
  matcher = new ErrorStateMatcher();
  ocultarContrasena = true; // Ocultar/Mostrar Contraseña
  ocultarConfirmarContrasena = true; // Ocultar /
  confirmarContrasena = '';
  nombre = ''
  apellido = ''
  tipoDocumento = 'cedula'
  numeroDocumento = ''
  perfil = 'estudiante' // Establece el valor predeterminado para el cargo
  dependencia = 'vcb'
  password = ''






  registrar() {
    // Validar que las contraseñas coincidan antes de enviar el formulario
    if (this.password !== this.confirmarContrasena) {
      console.log(this.password + ' - ' + this.confirmarContrasena)
      alert('Las contraseñas no coinciden.');
      return;
    }
  }
  focusConfirmar(): void {
    const confirmarInput: HTMLElement = this.elementRef.nativeElement.querySelector('#repetirContrasena');
    confirmarInput.focus();
  }
}
