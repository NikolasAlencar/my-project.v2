import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ConsultarService } from 'src/app/consulta/services/consultar.service';

@Injectable({
  providedIn: 'root'
})
export class DadosPessoaisService {

  private url_api: string = "http://localhost:3000";

  dados$ = new Subject()

  constructor(private consultaService: ConsultarService, private http: HttpClient) { }

  getDados(){
    return this.consultaService.getCliente()
  }

  updateClient(user: any){
    return this.http.put(`${this.url_api}/clientes/${user.id}`, user).subscribe((user: any) => {
      delete user?.nomeCompleto
    })
  }
}
