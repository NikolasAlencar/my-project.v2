import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { NavigationExtras } from "@angular/router";
import { formalizaValor } from "src/assets/util/formalizaValor";
import { ConsultarService } from "./services/consultar.service";
import { NavigateService } from "../services/navigate.service";

@Component({
  selector: "app-consulta",
  templateUrl: "./consulta.component.html",
  styleUrls: ["./consulta.component.scss"]
})
export class ConsultaComponent implements OnInit {
  constructor(
    private fb: FormBuilder, //private telaInicioService: TelaInicioService, private loginService: LoginService,
    private service: ConsultarService,
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

  acoes$ = this.service.getOptions('consultarAcoes');

  public loading: boolean = false;
  public opcaoSelecionada: number = 0;

  public pesquisar(opcaoSelecionada: string) {
    this.loading = true;
    if(this.consultar.controls[opcaoSelecionada].valid){
      this.consultar.markAsUntouched();
      this.service.consultar(formalizaValor(opcaoSelecionada), this.consultar.get(opcaoSelecionada)?.value)
        .subscribe((c: any[]) => {
          this.service.setCliente(c[0])
          this.loading = false;
          this.reuse ?
          this.emiteDados.emit(this.service.getCliente()) :
          this.navigate.navegarParaHome(this.service.getCliente() as NavigationExtras)
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
