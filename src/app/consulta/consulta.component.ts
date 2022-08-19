import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { NavigationExtras } from "@angular/router";
import { formalizaValor } from "src/assets/util/formalizaValor";
import { ConsultarService } from "./services/consultar.service";
import { Acoes } from "./model/Acoes";
import { NavigateService } from "../services/navigate.service";

@Component({
  selector: "app-consulta",
  templateUrl: "./consulta.component.html",
  styleUrls: ["./consulta.component.scss"]
})
export class ConsultaComponent implements OnInit {
  constructor(
    private fb: FormBuilder, //private telaInicioService: TelaInicioService, private loginService: LoginService,
    private consultarService: ConsultarService,
    private navigate: NavigateService,
  ) {}

  @Input() reuse: boolean = false;
  @Output() emiteDados = new EventEmitter<any>();

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
  public opcaoSelecionada: number = 0;

  public pesquisar(opcaoSelecionada: string) {
    this.loading = true;
    if(this.consultar.controls[opcaoSelecionada].valid){
      this.consultar.markAsUntouched();
      this.consultarService.consultar(formalizaValor(opcaoSelecionada), this.consultar.get(opcaoSelecionada)?.value)
        .subscribe(c => {
          this.consultarService.setCliente(c[0])
          this.loading = false;
          this.reuse ?
          this.emiteDados.emit(this.consultarService.getCliente()) :
          this.navigate.navegarParaHome(this.consultarService.getCliente() as NavigationExtras)
      })
    }else{
       this.consultar.markAllAsTouched();
       this.loading = false;
     }
  }

  ngOnInit(): void {
    this.consultar.get('radio')?.valueChanges.subscribe(() => this.opcaoSelecionada = this.consultar.get('radio')?.value-1)
    // this.loginService.isLogged()
    this.navigate.adicionaHistoria()
  }
}
