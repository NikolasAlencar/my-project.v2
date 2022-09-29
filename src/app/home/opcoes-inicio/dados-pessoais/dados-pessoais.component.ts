import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DadosPessoaisService } from './services/dados-pessoais.service';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.scss']
})
export class DadosPessoaisComponent implements OnInit {

  constructor(private router: Router, public service: DadosPessoaisService) { }

  public clienteConsultado = this.router.getCurrentNavigation()?.extras;

  @Output() emiteDados = new EventEmitter<any>()

  recebeDados($event: any){
    $event.update ? this.service.updateClient($event.dados) : this.service.dados$.next($event.dados)
  }

  ngOnInit(): void { }

}
