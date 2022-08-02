import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginModule } from "./login/login.module";
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot([]), BrowserAnimationsModule, LoginModule, MatToolbarModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
