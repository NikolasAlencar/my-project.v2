import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnviaEmailService } from 'src/app/services/envia-email.service';
import { OptionsRegister } from '../model/OptionRegister';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private enviaEmailService: EnviaEmailService) { }

  private url_api: string = "http://localhost:3000";

  cod!: number;

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

  public enviaEmailRegister(destinatario: string, cod: number){
    const corpoEmail = {
      to: destinatario,
      subject: "Código de Confirmação - Backoffice Wallet",
      message: `Olá, o seu código de verificação é o ${cod}`
    }
    return this.enviaEmailService.enviaEmail(corpoEmail)
  }
}
