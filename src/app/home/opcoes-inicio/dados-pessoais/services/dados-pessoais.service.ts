import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ConsultarService } from 'src/app/consulta/services/consultar.service';
import { EnviaMensagemService } from 'src/app/services/envia-mensagem.service';
import { ErrorService } from 'src/app/services/error.service';
import { bodyReq } from 'src/assets/util/bodyReq';
import { environment } from 'src/environments/environment';

const {body, headers} = bodyReq

@Injectable({
  providedIn: 'root'
})
export class DadosPessoaisService {

  dados$ = new Subject()

  constructor(private consultaService: ConsultarService,
              private http: HttpClient,
              private errorService: ErrorService,
              private enviaMensagem: EnviaMensagemService) { }

  getDados(){
    return this.consultaService.getCliente()
  }

  updateClient(client: any){
    delete client?.nomeCompleto
    return this.http.post(`${environment.api}/update/client`, {client}, {headers})
    .subscribe(() => {
      this.enviaMensagem.sucesso(`Cliente ${client?.nome} atualizado com sucesso!`)
    })
  }
}
