import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { retiraEspeciais } from "src/assets/util/retiraEspeciais";

@Injectable({
  providedIn: "root"
})
export class ConsultarService {
  constructor(private http: HttpClient) {}

  public clienteConsultado: any;

  private url_api: string = "http://localhost:3000";

  obtemClienteByCpf(cpf: string): Observable<any> {
    return this.http.get(`${this.url_api}/clientes?cpf=${cpf}`)
  }

  obtemClienteByAgenciaEConta(conta: string) {
    return this.http.get(`${this.url_api}/clientes?conta=${conta}`);
  }

  obtemClienteByCelular(celular: string) {
    return this.http.get(`${this.url_api}/clientes?celular=${celular}`);
  }

  obtemClienteByid(id: string) {
    return this.http.get(`${this.url_api}/clientes?id=${id}`);
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
}
