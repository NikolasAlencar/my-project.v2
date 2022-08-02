import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { SharedModule } from "../shared/shared.module";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, SharedModule, MatFormFieldModule, MatInputModule, MatProgressBarModule]
})
export class LoginModule {}
