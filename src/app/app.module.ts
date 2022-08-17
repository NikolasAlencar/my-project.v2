import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ActivatedRouteSnapshot, RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginModule } from "./login/login.module";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { TesteComponent } from "./teste/teste.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HeaderModule } from "./header/header.module";
import { MatSidenavModule } from "@angular/material/sidenav";
import { NgxMaskModule } from "ngx-mask";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, TesteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    LoginModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HeaderModule,
    MatSidenavModule,
    HttpClientModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
