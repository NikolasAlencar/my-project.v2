import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { MatListModule } from "@angular/material/list";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [HeaderComponent, SidenavComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatListModule, MatProgressSpinnerModule],
  exports: [HeaderComponent, SidenavComponent]
})
export class HeaderModule {}
