import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaEmailService {

  constructor(private http: HttpClient) { }

  enviaEmail(corpoEmail: any){
    return this.http.post('http://localhost:3030', corpoEmail)
  }
}
