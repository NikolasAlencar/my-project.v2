import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { map, pluck, tap } from "rxjs";
import { Acoes } from "./model/acoes";

@Component({
  selector: "app-consulta",
  templateUrl: "./consulta.component.html",
  styleUrls: ["./consulta.component.scss"]
})
export class ConsultaComponent implements OnInit {
  constructor(
    private fb: FormBuilder, //private telaInicioService: TelaInicioService, private loginService: LoginService,
    private router: Router, //private subscriberService: SubscriberService,
    private activatedRoute: ActivatedRoute
  ) {}

  public consultar = this.fb.group({
    radio: ["4", [Validators.required]],
    CPF: ["", [Validators.required, Validators.minLength(7), Validators.maxLength(20)]],
    Celular: ["", [Validators.required]],
    userId: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(3)]],
    "Agência/Conta": ["", [Validators.required]]
  });

  public acoes: Acoes = [
    { nome: "CPF", opcao: 1, descricao: "Digite o CPF", erro: "Campo CPF é obrigatório"},
    { nome: "Agência/Conta", opcao: 2, descricao: "Digite a Agência/Conta", erro: "Campo Agência/Conta é obrigatório"},
    { nome: "Celular", opcao: 3, descricao: "Digite o Celular", erro: "Campo Celular é obrigatório"},
    { nome: "userId", opcao: 4, descricao: "Digite o userId", erro: "Campo userId é obrigatório"}
  ];

  public loading: boolean = false;
  opcaoSelecionada: any = this.acoes[3];

  //private urlAtual = this.route.snapshot.url.join('');

  public pesquisar() {
    //if (this.consultar.valid === false) {
      //this.consultar.markAllAsTouched();
    //} else {
      this.consultar.markAsUntouched();
      this.loading = true;
      //this.telaInicioService.consultar(this.opcaoSelecionada, this.valorDigitado)
      setTimeout(() => {
        this.loading = false;
        this.router.navigate(["/home"]);
      }, 3000);
    //}
  }
  ngOnInit(): void {
    this.consultar.get('radio')?.valueChanges.subscribe(() => {this.opcaoSelecionada = this.acoes[this.consultar.get('radio')?.value-1]
  })
    // this.loginService.isLogged()
    // this.subscriberService.verificaHasHeader(true)
    // this.telaInicioService.adicionaHistoria(this.urlAtual)
  }
}
