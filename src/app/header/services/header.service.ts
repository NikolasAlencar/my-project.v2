import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { OptionsSidenav } from "../sidenav/model/OptionSidenav";

@Injectable({
  providedIn: "root"
})
export class HeaderService {
  constructor(private http: HttpClient) {}

  private url_api: string = "http://localhost:3000";

  getOptions(option: string): Observable<any> {
    return this.http.get<OptionsSidenav>(`${this.url_api}/${option}`)
  }
}
