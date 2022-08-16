import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TesteComponent } from "./teste/teste.component";

export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "consulta" },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule),
    data: {
      header: true
    }
  },
  {
    path: "login",
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule),
  },
  {
    path: "consulta",
    loadChildren: () => import("./consulta/consulta.module").then(m => m.ConsultaModule),
    data: {
      header: true
    }
  },
  {
    path: "teste",
    component: TesteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
