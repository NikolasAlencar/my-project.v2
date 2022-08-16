import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CrivoComponent } from "./crivo.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [CrivoComponent],
  imports: [CommonModule, SharedModule]
})
export class CrivoModule {}
