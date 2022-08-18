import { Component, EventEmitter, HostListener, Input, OnInit, Output, TemplateRef, ViewChild } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ConsultaComponent } from "src/app/consulta/consulta.component";
import { ConsultarService } from "src/app/consulta/services/consultar.service";
import { ajustaGrid } from "src/assets/util/ajustaGrid";

@Component({
  selector: "app-dados",
  templateUrl: "./dados.component.html",
  styleUrls: ["./dados.component.scss"]
})
export class DadosComponent implements OnInit{
  public innerWidth = ajustaGrid();

  @HostListener("window:resize")
  onResize() {
    this.innerWidth = ajustaGrid();
  }

  @ViewChild('consulta', { static: true })
  consulta!: TemplateRef<ConsultaComponent>

  abrirConsulta() {
    this.dialog.open(this.consulta)
  }

  constructor(
    // private telaInicioService: TelaInicioService,
    private fb: FormBuilder, // private consultarService: ConsultarService, // private subscriberService: SubscriberService
    private consultarService: ConsultarService,
    private dialog: MatDialog
    ) {
    //this.subscriberService.updateDataHome.subscribe(data => {
    //  this.atualizaDados(data);
    //});
  }

  @Input() clienteConsultado: any;
  @Output() emiteDados = new EventEmitter<any>();

  startDate = new Date(2022, 0, 1);

  optionsDados: Array<any> = [
    { name: "id", desc: "Id", erro: "" },
    { name: "nomeCompleto", desc: "Nome completo", erro: "" },
    { name: "cpf", desc: "CPF", erro: "" },
    { name: "dataDeNascimento", desc: "Data de nascimento", erro: "" },
    { name: "nomeDaMae", desc: "Nome da mãe", erro: "" },
    { name: "email", desc: "Email", erro: "" }
  ];

  optionsEndereco: Array<any> = [
    { name: "cep", desc: "Cep", erro: "endereco.cep" },
    { name: "logradouro", desc: "Logradouro", erro: "endereco.logradouro" },
    { name: "numero", desc: "Número", erro: "endereco.numero" },
    { name: "cidade", desc: "Cidade", erro: "endereco.cidade" },
    { name: "bairro", desc: "Bairro", erro: "endereco.bairro" },
    { name: "estado", desc: "Estado", erro: "endereco.estado" },
    { name: "complemento", desc: "Complemento", erro: "endereco.complemento" }
  ];

  public formulario = this.fb.group({
    nomeCompleto: ["", [Validators.required, Validators.minLength(20), Validators.maxLength(70)]],
    cpf: ["", [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
    id: [""],
    dataDeNascimento: ["aaa"],
    email: ["", [Validators.required, Validators.minLength(20), Validators.maxLength(50)]],
    nomeDaMae: ["", [Validators.required, Validators.minLength(15), Validators.maxLength(100)]],
    endereco: this.fb.group({
      cep: ["", [Validators.required, Validators.minLength(7), Validators.maxLength(15)]],
      logradouro: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      numero: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(7)]],
      cidade: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      bairro: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      complemento: ["", [Validators.maxLength(30)]],
      estado: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(2)]]
    })
  });

  public confirmar(): void {
    console.log(this.formulario.value)
    // if (this.formulario.valid === false) {
    //   this.formulario.markAllAsTouched();
    // } else {
    //   this.formulario.markAsUntouched();
    //   this.clienteConsultado = Object.assign(this.clienteConsultado, this.formulario.value);
    //   //this.telaInicioService.updateClient(this.clienteConsultado);
    // }
  }

  public atualizaDados(dados: any) {
    // this.clienteConsultado = dados;
    // const nomeCompleto = juntaNome(this.clienteConsultado.nome, this.clienteConsultado.sobrenome);
    // Object.assign(this.clienteConsultado, { nomeCompleto });
    // this.formulario.patchValue(this.clienteConsultado);
    // this.formulario.updateValueAndValidity();
  }

  public recebeDados($event: any){
    this.clienteConsultado = $event
    this.emiteDados.emit($event)
    this.dialog.closeAll()
    this.populaDados()
  }

  populaDados(){
    const dadosGerais = this.optionsDados.concat(this.optionsEndereco)
    dadosGerais.map(option => {
      if(option.erro.includes('.')){
        this.formulario.get('endereco')?.get(option.name)?.setValue(this.clienteConsultado.endereco[option.name])
      }else if(option.name === 'nomeCompleto'){
        this.formulario.get('nomeCompleto')?.setValue(this.clienteConsultado.nome + " " + this.clienteConsultado.sobrenome)
      }else{
        this.formulario.get(option.name)?.setValue(this.clienteConsultado[option.name])
      }
    })
    this.formulario.updateValueAndValidity()
  }

  ngOnInit(): void {
    if(this.clienteConsultado['nomeCompleto']) {
      this.populaDados()
    }else{
      this.consultarService.getCliente() ?
      (this.clienteConsultado = this.consultarService.getCliente(),
      this.populaDados()) :
      this.abrirConsulta()
    }
  }
}
