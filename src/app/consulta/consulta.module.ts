import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaRoutingModule } from './consulta-routing.module';
import { ConsultaComponent } from './consulta.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button'
import { MatRadioModule } from '@angular/material/radio'


@NgModule({
  declarations: [
    ConsultaComponent
  ],
  imports: [
    CommonModule,
    ConsultaRoutingModule,
    SharedModule,
    MatButtonModule,
    MatRadioModule
  ]
})
export class ConsultaModule { }
