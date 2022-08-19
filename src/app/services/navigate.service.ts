import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class NavigateService {
  constructor(private router: Router) {}

  public historia: Array<string> = [""];

  navegarParaLogin() {
    this.router.navigate(["/login"]);
  }

  navegarParaHome(params?: any) {
    this.router.navigate(["/home"], params);
  }

  navegarParaConsulta() {
    this.router.navigate(["/consulta"]);
  }

  navegarOpcaoSelecionada(local: string) {
    this.router.navigate(["/home/" + local]);
  }

  navegarPara(local: string) {
    this.router.navigate(["/" + local]);
  }

  voltar() {
    this.navegarPara(this.historia[this.historia.length - 2]);
    this.historia.pop();
  }

  adicionaHistoria() {
    if (this.router.url !== this.historia[this.historia.length - 1] || "") {
      this.historia.push(this.router.url);
    }
  }
}
