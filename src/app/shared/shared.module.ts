import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { PoModule } from '@po-ui/ng-components';
//import { MessagesModule } from '../messages/messages.module';
//import { NoDataModule } from '../no-data/no-data.module';
import { ReactiveFormsModule } from '@angular/forms';
//import { AuthorizationModule } from '../authorization/authorization.module';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    // PoModule,
    // MessagesModule,
    // NoDataModule,
    ReactiveFormsModule,
    // AuthorizationModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    // PoModule,
    // MessagesModule,
    // NoDataModule,
    ReactiveFormsModule,
    // AuthorizationModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule
  ],
})
export class SharedModule {}
