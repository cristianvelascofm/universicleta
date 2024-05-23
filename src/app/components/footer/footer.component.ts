import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public proyecto: any = {anio: '2024', nombreProyecto: 'Universicleta'};
  public dependencia: any = 'Vicerectoria de Cultura y Bienestar';
  public autor: string = 'Universidad del Cauca';
  public ayuda: string = 'Habla con nosotros';
  public docs: any = {condiciones: 'Codiciones generales de uso', politica: 'Politica de Tratamiento de Datos'};
}
