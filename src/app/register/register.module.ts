import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RegisterRoutingModule } from "./register-routing.module";
import { RegisterComponent } from "./register.component";
import { SharedModule } from "../shared/shared.module";
import { MatStepperModule } from "@angular/material/stepper";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { LastStepComponent } from "./last-step/last-step.component";
import { TimerComponent } from "../components/timer/timer.component";

@NgModule({
  declarations: [RegisterComponent, LastStepComponent, TimerComponent],
  imports: [CommonModule, RegisterRoutingModule, SharedModule, MatStepperModule, MatProgressSpinnerModule]
})
export class RegisterModule {}
