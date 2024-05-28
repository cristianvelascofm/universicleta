import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversicletaService {
  path = '';
  username = '';
  token = ''
  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": `Bearer ${this.token}`
  });

  constructor(private http: HttpClient) {
    this.path = environment.apiBaseUrl;
    this.username = environment.getUserSession();
  }


  ping(): Observable<any[]> {
    const dictSend = {
      action: "ping",
      msg : "ping",
    };
    return this.http.post<any[]>(this.path, dictSend, { headers: this.headers });
  }
}
