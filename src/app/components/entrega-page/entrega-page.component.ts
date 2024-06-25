import { Component } from '@angular/core';
import { PersonService } from '../../services/person.service';
import swal from 'sweetalert2';
import { ReservationPageComponent } from '../reservation-page/reservation-page.component';

@Component({
  selector: 'app-entrega-page',
  templateUrl: './entrega-page.component.html',
  styleUrls: ['./entrega-page.component.scss']
})
export class EntregaPageComponent {
  //TODO: traer datos de las estaciones desde el back
  constructor(private person: PersonService) { }
  selectedStation: string = '';
  stationSelected: boolean = false;
  user: string = 'Pepe';
  currentDateTime: string = '';
  bikeName: string = 'Bicicleta A';
  bikeNumber: string = '23';
  countdownMinutes: number = 5;//minutos
  countdownSeconds: number = 0;
  countdownTimer: any; // Id del temporizador
  estpartida: string = 'facultada de Salud';//TODO: obtener la factuldad

  ngOnInit(): void {
    this.user = this.person.username;
    this.updateDateTime();
  }

  selectStation(station: string): void {
    this.selectedStation = station;
    this.stationSelected = true;
  }

  reportarNovedad(): void {
    swal.fire('¡Notificacion!', `Notificacion enviada!`, 'info');
  }
  entregar(): void {
    swal.fire('¡Notificacion!', `Recuerda estar en la estacion para la entrega, tienes 5 minutos!`, 'warning');
    this.startCountdown();
    
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
    this.countdownMinutes = 5;
    this.countdownSeconds = 0;
    clearInterval(this.countdownTimer);
  }

  reservar(){}
}
