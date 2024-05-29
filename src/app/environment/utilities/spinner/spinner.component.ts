import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  private spinnerSubject = new Subject<boolean>();
  isLoading;

  constructor(private spinnerService: SpinnerService) {
    this.isLoading = this.spinnerService.isLoading;
  }
}
