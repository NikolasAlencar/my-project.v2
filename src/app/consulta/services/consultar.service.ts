import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "src/assets/model/Client";
import { retiraEspeciais } from "src/assets/util/retiraEspeciais";
import { ConsultarAcoes } from "../model/ConsultarAcao";
import { environment } from "src/environments/environment";
import { bodyReq } from "src/assets/util/bodyReq";

@Injectable({
  providedIn: "root"
})
export class ConsultarService {
  constructor(private http: HttpClient) {}

  private clienteConsultado!: Client;

  getOptions(option: string): Observable<any> {
    const {headers, body} = bodyReq
    return this.http.post<ConsultarAcoes>(`${environment.api}/obter/options/${option}`, body, {headers})
  }

  obtemClienteByCpf(cpf: string): Observable<any> {
    return this.http.get(`${environment.api}/clientes?cpf=${cpf}`)
  }

  obtemClienteByAgenciaEConta(conta: string): Observable<any> {
    return this.http.get(`${environment.api}/clientes?conta=${conta}`);
  }

  obtemClienteByCelular(celular: string): Observable<any> {
    return this.http.get(`${environment.api}/clientes?celular=${celular}`);
  }

  obtemClienteByid(id: string): Observable<any> {
    return this.http.get(`${environment.api}/clientes?id=${id}`);
  }

  consultar(opcaoSelecionada: string, valorDigitado: string): Observable<any> {
    switch (opcaoSelecionada) {
      case "cpf":
        return this.obtemClienteByCpf(valorDigitado);
      case "conta":
        return this.obtemClienteByAgenciaEConta(valorDigitado);
      case "celular":
        valorDigitado = retiraEspeciais(valorDigitado);
        return this.obtemClienteByCelular(valorDigitado);
      case "userid":
        return this.obtemClienteByid(valorDigitado);
    }
    return new Observable
  }

  setCliente(cliente: any): void{
    this.clienteConsultado = cliente
  }

  getCliente(): any{
    return this.clienteConsultado
  }
}
