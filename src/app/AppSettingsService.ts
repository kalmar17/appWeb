import { HttpClient } from '@angular/common/http'; 
import { Injectable, Component } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class AppSettingsService {

   constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
            console.log(data);
        });
    }

    public getJSON(): Observable<any> {
        return this.http.get("/assets/mydata.json");
    }
    
}