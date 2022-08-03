import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosPessoaisComponent } from './dados-pessoais.component';
import { ContaDigitalComponent } from './conta-digital/conta-digital.component';
import { DadosComponent } from './dados/dados.component';
import { EnviarParaComponent } from './enviar-para/enviar-para.component';
import { HistoricoComponent } from './historico/historico.component';
import { ResetSenhaComponent } from './reset-senha/reset-senha.component';



@NgModule({
  declarations: [
    DadosPessoaisComponent,
    ContaDigitalComponent,
    DadosComponent,
    EnviarParaComponent,
    HistoricoComponent,
    ResetSenhaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DadosPessoaisModule { }
