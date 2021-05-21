import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url_api } from './../../global-config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  endpoint = 'user/login';
  constructor(
    public http: HttpClient
  ) { }
  login(username: any, password: any) {

    let data = {
      usuario: username,
      senha: password
    };

    return this.http.post<any>(url_api + this.endpoint, data, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }
}
