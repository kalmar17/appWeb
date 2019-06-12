import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { IntroInfo } from './introInfo';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = '/api';

  constructor(private httpClient: HttpClient) {}
  public getMenu(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
      return this.httpClient.get<Menu[]>(`${this.apiURL}/menu`, httpOptions)
  }
  public getIntro(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
      return this.httpClient.get<IntroInfo[]>(`${this.apiURL}/add`, httpOptions)
  }
  public sendAppointment(body:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
      return this.httpClient.post(`${this.apiURL}/add`, body, httpOptions)
      
  }
}
