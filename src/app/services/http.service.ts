import { url_api } from './../../global-config';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(public http: HttpClient) {
    
  }

  get(endpoint: string, token: any){
    return this.http.get<Observable<any[]>>(`${url_api}${endpoint}`,
    {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
  }

  getWithoutToken(endpoint: string){
    return this.http.get<Observable<any[]>>(`${url_api}${endpoint}`);
  }

  getById(endpoint: string, token: any){
    return this.http.get<any>(`${url_api}${endpoint}`,
    {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
  }

  post(endpoint:string, data: Object, token: any){
    return this.http.post(`${url_api}${endpoint}`,data,
    {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
  }

  put(endpoint:string, data: Object, token: any){
    return this.http.put(`${url_api}${endpoint}`,data,
    {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
  }

  postWithoutToken(endpoint:string, data: Object){
    return this.http.post(`${url_api}${endpoint}`,data);
  }
}
