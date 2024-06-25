import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersonService } from 'src/app/services/person.service';
import swal from 'sweetalert2';
import { NotificationDialogComponent } from 'src/app/dialogs/notification-dialog/notification-dialog.component';
import { UniversicletaService } from 'src/app/services/universicleta.service';
import { FormControl, Validators } from '@angular/forms';
import { Subscription, interval } from 'rxjs';

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
  countdownSubscription: Subscription | null = null;
  reservaActiva = false;
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
    this.startCountdown(10);
    this.reservaActiva= true
  }

  desbloquear(): void {
    swal.fire('¡Alerta!', `Recuerda que debes estar en la estacion para este paso!`, 'warning');
  }

  cancelarReserva(): void {
    swal.fire('¡Notificacion!', `Reserva cancelada!`, 'error');
    this.reservationInfoVisible = false;
    this.resetCountdown();
    this.reservaActiva = false
  }

  updateDateTime(): void {
    const now = new Date();
    this.currentDateTime = now.toLocaleString();
  }

  startCountdown(minutes: number) {
    const countdownTime = minutes * 60; // Convertir minutos a segundos
    this.countdownMinutes = Math.floor(countdownTime / 60);
    this.countdownSeconds = countdownTime % 60;

    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
    }

    this.countdownSubscription = interval(1000).subscribe(() => {
      if (this.countdownSeconds > 0) {
        this.countdownSeconds--;
      } else {
        if (this.countdownMinutes > 0) {
          this.countdownMinutes--;
          this.countdownSeconds = 59;
        } else {
          // Cuenta regresiva completada
          this.countdownSubscription?.unsubscribe();
        }
      }
    });
  }

  resetCountdown(): void {
    this.countdownMinutes = 10;
    this.countdownSeconds = 0;
    clearInterval(this.countdownTimer);
  }


}
