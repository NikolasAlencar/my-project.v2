import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OptionsCrivo } from '../model/OptionCrivo';

@Injectable({
  providedIn: 'root'
})
export class CrivoService {

  constructor(private http: HttpClient) { }

  private url_api: string = "http://localhost:3000";

  getOptions(option: string): Observable<any> {
    return this.http.get<OptionsCrivo>(`${this.url_api}/${option}`)
  }
}
