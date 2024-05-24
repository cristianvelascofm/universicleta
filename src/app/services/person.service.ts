import { Injectable } from '@angular/core';
import { environment } from '../environment/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

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


  login(userName: string, password: string): Observable<any[]> {
    const dictSend = {
      action: "login",
      username: userName,
      password: password,
    };
    return this.http.post<any[]>(this.path, dictSend, { headers: this.headers });
  }

  logout(): Observable<any[]> {
    const dictSend = {
      accion: "logout",
      username: this.username,
    };
    return this.http.post<any[]>(this.path, dictSend, { headers: this.headers });
  }
}
