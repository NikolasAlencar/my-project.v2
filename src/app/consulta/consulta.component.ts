import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Acoes } from "./model/acoes";

@Component({
  selector: "app-consulta",
  templateUrl: "./consulta.component.html",
  styleUrls: ["./consulta.component.scss"]
})
export class ConsultaComponent implements OnInit {
  constructor(
    private fb: FormBuilder //private telaInicioService: TelaInicioService, //             private loginService: LoginService,
  ) //             private subscriberService: SubscriberService,
  //             private route: ActivatedRoute
  {}

  public consultar = this.fb.group({
    campo: ["", [Validators.required, Validators.minLength(7), Validators.maxLength(20)]],
    radio: ["2", [Validators.required, Validators.minLength(7), Validators.maxLength(20)]]
  });

  public acoes: Acoes = [
    { nome: "CPF", opcao: 1, descricao: "Digite o CPF", erro: "Campo CPF é obrigatório" },
    { nome: "Agência/Conta", opcao: 2, descricao: "Digite a Agência/Conta", erro: "Campo Agência/Conta é obrigatório" },
    { nome: "Celular", opcao: 3, descricao: "Digite o Celular", erro: "Campo Celular é obrigatório" },
    { nome: "userId", opcao: 4, descricao: "Digite o userId", erro: "Campo userId é obrigatório" }
  ];

  public loading: boolean = false;
  public opcaoSelecionada: any = this.acoes[1]

  //private urlAtual = this.route.snapshot.url.join('');

  public click(opcaoSelecionada: any) {
    this.opcaoSelecionada = this.acoes[opcaoSelecionada-1]
    //this.opcaoSelecionada = this.telaInicioService.opcaoSelecionada(opcaoSelecionada)
  }

  public pesquisar() {
    //this.loading = true;
    //this.telaInicioService.consultar(this.opcaoSelecionada, this.valorDigitado)
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

  ngOnInit(): void {
    // this.loginService.isLogged()
    // this.subscriberService.verificaHasHeader(true)
    // this.telaInicioService.adicionaHistoria(this.urlAtual)
  }
}
