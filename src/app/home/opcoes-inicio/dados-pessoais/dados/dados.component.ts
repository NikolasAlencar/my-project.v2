import { Component, HostListener, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Cols } from "src/assets/model/Cols";
import { ajustaGrid } from "src/assets/util/ajustaGrid";

@Component({
  selector: "app-dados",
  templateUrl: "./dados.component.html",
  styleUrls: ["./dados.component.scss"]
})
export class DadosComponent implements OnInit {
  public innerWidth = ajustaGrid();

  @HostListener("window:resize")
  onResize() {
    this.innerWidth = ajustaGrid();
  }

  constructor(
    // private telaInicioService: TelaInicioService,
    private fb: FormBuilder // private consultarService: ConsultarService,
  ) // private subscriberService: SubscriberService
  {
    //this.subscriberService.updateDataHome.subscribe(data => {
    //  this.atualizaDados(data);
    //});
  }

  public clienteConsultado: any = {
    id: 1,
    nome: "Nikolas",
    sobrenome: "Teste Testee",
    cpf: "764.494.450-84",
    agencia: "0284",
    conta: "032881-1",
    dataDeNascimento: "02/02/2001",
    celular: "11930497995",
    nomeDaMae: "Silvia Thompson da Silva",
    area: "SM",
    email: "nikolasalencarrs73@gmail.com",
    endereco: {
      cep: "04.910-331",
      logradouro: "AC Marcelino Barski",
      numero: "226",
      cidade: "Porto Alegre",
      bairro: "JD Sabara",
      complemento: "",
      estado: "RS"
    }
  };

  optionsDados: any = [
    { name: "id", desc: "Id", erro: "" },
    { name: "nomeCompleto", desc: "Nome completo", erro: "" },
    { name: "cpf", desc: "CPF", erro: "" },
    { name: "dataDeNascimento", desc: "Data de nascimento", erro: "" },
    { name: "nomeDaMae", desc: "Nome da mãe", erro: "" },
    { name: "email", desc: "Email", erro: "" }
  ];

  optionsEndereco: any = [
    { name: "cep", desc: "Cep", erro: "endereco.cep" },
    { name: "logradouro", desc: "Logradouro", erro: "endereco.logradouro" },
    { name: "numero", desc: "Número", erro: "endereco.numero" },
    { name: "cidade", desc: "Cidade", erro: "endereco.cidade" },
    { name: "bairro", desc: "Bairro", erro: "endereco.bairro" },
    { name: "estado", desc: "Estado", erro: "endereco.estado" },
    { name: "complemento", desc: "Complemento", erro: "endereco.complemento" }
  ];
  //= this.consultarService.clienteConsultado[0];

  public formulario = this.fb.group({
    nomeCompleto: [
      this.clienteConsultado.nome + " " + this.clienteConsultado.sobrenome,
      [Validators.required, Validators.minLength(20), Validators.maxLength(70)]
    ],
    cpf: [this.clienteConsultado.cpf, [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
    id: [this.clienteConsultado.cpf],
    dataDeNascimento: [this.clienteConsultado.cpf],
    email: [this.clienteConsultado.email, [Validators.required, Validators.minLength(20), Validators.maxLength(50)]],
    nomeDaMae: [this.clienteConsultado.nomeDaMae, [Validators.required, Validators.minLength(15), Validators.maxLength(100)]],
    endereco: this.fb.group({
      cep: [this.clienteConsultado.endereco.cep, [Validators.required, Validators.minLength(7), Validators.maxLength(15)]],
      logradouro: [
        this.clienteConsultado.endereco.logradouro,
        [Validators.required, Validators.minLength(2), Validators.maxLength(20)]
      ],
      numero: [this.clienteConsultado.endereco.numero, [Validators.required, Validators.minLength(1), Validators.maxLength(7)]],
      cidade: [
        this.clienteConsultado.endereco.cidade,
        [Validators.required, Validators.minLength(2), Validators.maxLength(15)]
      ],
      bairro: [
        this.clienteConsultado.endereco.bairro,
        [Validators.required, Validators.minLength(5), Validators.maxLength(30)]
      ],
      complemento: [this.clienteConsultado.endereco.complemento, [Validators.maxLength(30)]],
      estado: [this.clienteConsultado.endereco.estado, [Validators.required, Validators.minLength(2), Validators.maxLength(2)]]
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

  ngOnInit(): void {}
}
