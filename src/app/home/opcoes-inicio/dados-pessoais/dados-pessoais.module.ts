import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DadosPessoaisComponent } from "./dados-pessoais.component";
import { ContaDigitalComponent } from "./conta-digital/conta-digital.component";
import { DadosComponent } from "./dados/dados.component";
import { EnviarParaComponent } from "./enviar-para/enviar-para.component";
import { HistoricoComponent } from "./historico/historico.component";
import { ResetSenhaComponent } from "./reset-senha/reset-senha.component";

import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [
    DadosPessoaisComponent,
    ContaDigitalComponent,
    DadosComponent,
    EnviarParaComponent,
    HistoricoComponent,
    ResetSenhaComponent
  ],
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatSelectModule]
})
export class DadosPessoaisModule {}
