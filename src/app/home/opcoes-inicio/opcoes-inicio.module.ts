import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OpcoesInicioRoutingModule } from "./opcoes-inicio-routing.module";
import { OpcoesInicioComponent } from "./opcoes-inicio.component";
import { ResumoCadastralComponent } from "./resumo-cadastral/resumo-cadastral.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card"
import { MatListModule } from "@angular/material/list"
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [OpcoesInicioComponent, ResumoCadastralComponent],
  imports: [CommonModule, OpcoesInicioRoutingModule, MatDialogModule, MatCardModule, MatListModule, MatButtonModule]
})
export class OpcoesInicioModule {}
