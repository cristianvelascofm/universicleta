import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  public isLoading = new Subject<boolean>();

  show() {
    setTimeout(() => this.isLoading.next(true), 0); // Wrap in setTimeout
  }

  hide() {
    setTimeout(() => this.isLoading.next(false), 0); // Wrap in setTimeout
  }
}

