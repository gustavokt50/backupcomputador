import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url_api } from './../../global-config';

@Injectable({
  providedIn: 'root'
})
export class CemiterioService {

  constructor(
    public http: HttpClient
  ) { }

  getCemiterio(token: any) {
    return this.http.get<any[]>(url_api + 'cemiterio', {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
  }
}
