import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ConsultarService } from 'src/app/consulta/services/consultar.service';

@Injectable({
  providedIn: 'root'
})
export class DadosPessoaisService {

  dados$ = new Subject()

  constructor(private consultaService: ConsultarService) { }

  getDados(){
    return this.consultaService.getCliente()
  }
}
