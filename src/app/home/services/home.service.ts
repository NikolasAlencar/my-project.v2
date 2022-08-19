import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OptionsHome } from '../model/OptionHome';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  private url_api: string = "http://localhost:3000";

  getOptions(option: string): Observable<any> {
    return this.http.get<OptionsHome>(`${this.url_api}/${option}`)
  }
}
