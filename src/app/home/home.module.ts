import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

import { MatSliderModule } from "@angular/material/slider";
import { ResumoCadastralModule } from "./opcoes-inicio/resumo-cadastral/resumo-cadastral.module";
import { MatTabsModule } from "@angular/material/tabs";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, MatSliderModule, ResumoCadastralModule, MatTabsModule]
})
export class HomeModule {}
