import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { formalizaCpf } from 'src/assets/util/formalizaCpf';
import { retiraEspeciais } from 'src/assets/util/retiraEspeciais';

@Injectable({
  providedIn: 'root'
})
export class ConsultarService {

  constructor(private http: HttpClient) { }

  public clienteConsultado: any;

  private url_api: string = 'http://localhost:3000';

  obtemClienteByCpf(cpf: string){
    this.http.get(`${this.url_api}/clientes?cpf=${cpf}`)
  }

  obtemClienteByAgenciaEConta(conta: string){
    this.http.get(`${this.url_api}/clientes?conta=${conta}`)
  }

  obtemClienteByCelular(celular: string){
    this.http.get(`${this.url_api}/clientes?celular=${celular}`)
  }

  obtemClienteByid(id: string){
    this.http.get(`${this.url_api}/clientes?id=${id}`)
  }

  consultar(opcaoSelecionada: string, valorDigitado: any){
    switch(opcaoSelecionada){
      case 'cpf':
        valorDigitado = formalizaCpf(valorDigitado)
        return this.obtemClienteByCpf(valorDigitado)
      case 'conta':
        return this.obtemClienteByAgenciaEConta(valorDigitado)
      case 'celular':
        valorDigitado = retiraEspeciais(valorDigitado)
        return this.obtemClienteByCelular(valorDigitado)
      case 'userid':
        return this.obtemClienteByid(valorDigitado)
    }
  }
}
