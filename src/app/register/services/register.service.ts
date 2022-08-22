import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { OptionsRegister } from '../model/OptionRegister';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  private url_api: string = "http://localhost:3000";

  getOptions(option: string): Observable<any> {
    return this.http.get<OptionsRegister>(`${this.url_api}/${option}`)
  }

  getUser(userName: string): Observable<any> {
    return this.http.get<OptionsRegister>(`${this.url_api}/users?usuario=${userName}`)
  }

  getUserByEmail(email: string): Observable<any> {
    return this.http.get<OptionsRegister>(`${this.url_api}/users?email=${email}`)
  }

  addUser(user: any): Observable<any> {
    return this.http.post(`${this.url_api}/users`, user)
  }
}
