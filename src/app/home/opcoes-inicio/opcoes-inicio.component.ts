import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-opcoes-inicio",
  templateUrl: "./opcoes-inicio.component.html",
  styleUrls: ["./opcoes-inicio.component.scss"]
})
export class OpcoesInicioComponent implements OnInit {
  constructor() //private navigateService: NavigateService,
  //   private loginService: LoginService,
  //   private outlet: RouterOutlet
  {}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  public opcoes: Array<any> = [
    { nome: "Dados pessoais", id: 1, path: "" },
    { nome: "Crivo", id: 2, path: "crivo" },
    { nome: "PLD", id: 3, path: "" },
    { nome: "Identificação biométrica", id: 4, path: "" },
    { nome: "Notificações", id: 6, path: "" },
    { nome: "Bloquear/Desbloquear dispositivo" },
    { nome: "Portabilidade", id: 7, path: "" },
    { nome: "Comprovantes", id: 8, path: "" },
    { nome: "Token", id: 9, path: "" },
    { nome: "Token - Log", id: 10, path: "" },
    { nome: "Cartões", id: 11, path: "" },
    { nome: "Cartões BCD", id: 12, path: "" },
    { nome: "MGM", id: 13, path: "" }
  ];

  public navegarOpcaoSelecionada = (path: string) => {
    //this.navigateService.navegarOpcaoSelecionada(path)
  };
}
