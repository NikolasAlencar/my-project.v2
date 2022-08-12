import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DadosPessoaisComponent } from "./dados-pessoais.component";
import { ContaDigitalComponent } from "./conta-digital/conta-digital.component";
import { DadosComponent } from "./dados/dados.component";
import { EnviarParaComponent } from "./enviar-para/enviar-para.component";
import { HistoricoComponent } from "./historico/historico.component";
import { ResetSenhaComponent } from "./reset-senha/reset-senha.component";

import { MatSelectModule } from "@angular/material/select";
import { SharedModule } from "src/app/shared/shared.module";
import { MatTableModule } from "@angular/material/table";
import { MatGridListModule } from "@angular/material/grid-list";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    DadosPessoaisComponent,
    ContaDigitalComponent,
    DadosComponent,
    HistoricoComponent,
    ResetSenhaComponent,
    EnviarParaComponent
  ],
  imports: [CommonModule, MatSelectModule, SharedModule, MatTableModule, MatGridListModule, FlexLayoutModule]
})
export class DadosPessoaisModule {}
