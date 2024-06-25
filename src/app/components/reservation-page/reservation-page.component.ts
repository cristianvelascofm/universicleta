import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersonService } from 'src/app/services/person.service';
import swal from 'sweetalert2';
import { NotificationDialogComponent } from 'src/app/dialogs/notification-dialog/notification-dialog.component';
import { UniversicletaService } from 'src/app/services/universicleta.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.scss']
})
export class ReservationPageComponent implements OnInit {

  //TODO: traer datos de las estaciones desde el back
  constructor(private person: PersonService, private universicleta: UniversicletaService) { }

  estaciones: any[] = []
  estacionControl = new FormControl<any[]>([], [Validators.required]);
  estacionSeleccionada: any = {}
  selectedStation: string = '';
  stationSelected: boolean = false;
  user: string = 'Pepe';
  reservationInfoVisible: boolean = false;
  currentDateTime: string = '';
  bikeName: string = 'Bicicleta A';
  bikeNumber: string = '23';
  countdownMinutes: number = 10;//minutos
  countdownSeconds: number = 0;
  countdownTimer: any; // Id del temporizador

  ngOnInit(): void {
    this.obtenerEstaciones()
    this.user = this.person.username;
    this.updateDateTime();
  }

  obtenerEstaciones() {
    this.universicleta.obtenerEstaciones().subscribe((any) => {
      this.estaciones = any
      console.log("Estaciones: ", this.estaciones)
    })
  }

  onSelectionComponent() {
    console.log(this.estacionControl.value)
    this.estacionSeleccionada = this.estacionControl.value
  }

  selectStation(station: string): void {
    this.selectedStation = station;
    this.stationSelected = true;
  }

  reservar(): void {
    swal.fire('¡Notificacion!', `Reserva exitosa!`, 'success');
    this.reservationInfoVisible = true;
    this.startCountdown();
  }

  desbloquear(): void {
    swal.fire('¡Alerta!', `Recuerda que debes estar en la estacion para este paso!`, 'warning');
  }

  cancelarReserva(): void {
    swal.fire('¡Notificacion!', `Reserva cancelada!`, 'error');
    this.reservationInfoVisible = false;
    this.resetCountdown();
  }

  updateDateTime(): void {
    const now = new Date();
    this.currentDateTime = now.toLocaleString();
  }

  startCountdown(): void {
    this.countdownTimer = setInterval(() => {
      if (this.countdownMinutes > 0 || this.countdownSeconds > 0) {
        if (this.countdownSeconds > 0) {
          this.countdownSeconds--;
        } else {
          this.countdownSeconds = 59;
          this.countdownMinutes--;
        }
      } else {
        clearInterval(this.countdownTimer);
      }
    }, 1000);
  }

  resetCountdown(): void {
    this.countdownMinutes = 10;
    this.countdownSeconds = 0;
    clearInterval(this.countdownTimer);
  }


}
