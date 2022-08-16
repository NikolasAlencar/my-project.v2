import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { retiraEspeciais } from "src/assets/util/retiraEspeciais";
import { ConsultarService } from "../services/consultar/consultar.service";
import { Acao, Acoes } from "./model/acoes";

@Component({
  selector: "app-consulta",
  templateUrl: "./consulta.component.html",
  styleUrls: ["./consulta.component.scss"]
})
export class ConsultaComponent implements OnInit {
  constructor(
    private fb: FormBuilder, //private telaInicioService: TelaInicioService, private loginService: LoginService,
    //private consultarService: ConsultarService
  ) {}

  public consultar = this.fb.group({
    radio: ["1", [Validators.required]],
    CPF: ["", [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
    Celular: ["", [Validators.required, Validators.minLength(15), Validators.maxLength(15)]],
    userId: ["", [Validators.required, Validators.minLength(1)]],
    "Agência/Conta": ["", [Validators.required, Validators.minLength(13), Validators.maxLength(13)]]
  });

  public acoes: Acoes = [
    { nome: "CPF", opcao: 1, descricao: "Digite o CPF", erro: "Campo CPF é obrigatório" },
    { nome: "Agência/Conta", opcao: 2, descricao: "Digite a Agência/Conta", erro: "Campo Agência/Conta é obrigatório" },
    { nome: "Celular", opcao: 3, descricao: "Digite o Celular", erro: "Campo Celular é obrigatório" },
    { nome: "userId", opcao: 4, descricao: "Digite o userId", erro: "Campo userId é obrigatório" }
  ];

  public loading: boolean = false;
  opcaoSelecionada: number = 0;

  //private urlAtual = this.route.snapshot.url.join('');

  public pesquisar(opcaoSelecionada: string) {
    if(this.consultar.controls[opcaoSelecionada].valid){
      this.consultar.markAsUntouched();
      
    }else{
      this.consultar.markAllAsTouched();
    }
    console.log(this.opcaoSelecionada)
    // const opcaoSelecionada = retiraEspeciais(
    //   this.opcaoSelecionada.nome.toLocaleLowerCase().substring(this.opcaoSelecionada.nome.indexOf("/"))
    // );
    console.log();
    //console.log(opcaoSelecionada)
    //this.consultarService(opcaoSelecionada, this.)
    //if (this.consultar.valid === false) {
    //this.consultar.markAllAsTouched();
    //} else {
    // this.consultar.markAsUntouched();
    // this.loading = true;
    //this.telaInicioService.consultar(this.opcaoSelecionada, this.valorDigitado)
    // setTimeout(() => {
    //   this.loading = false;
    //   this.router.navigate(["/home"]);
    // }, 3000);
    //}
  }
  ngOnInit(): void {
    this.consultar.get('radio')?.valueChanges.subscribe(() => this.opcaoSelecionada = this.consultar.get('radio')?.value-1)
  // this.loginService.isLogged()
  // this.subscriberService.verificaHasHeader(true)
  // this.telaInicioService.adicionaHistoria(this.urlAtual)
  }
}
