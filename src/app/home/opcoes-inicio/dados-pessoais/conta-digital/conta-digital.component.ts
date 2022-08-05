import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-conta-digital",
  templateUrl: "./conta-digital.component.html",
  styleUrls: ["./conta-digital.component.scss"]
})
export class ContaDigitalComponent implements OnInit {
  constructor(
    // public telaInicioService: TelaInicioService,
    // private consultarService: ConsultarService,
    // private subscriberService: SubscriberService
  ) {
    // this.subscriberService.updateDataHome.subscribe(data => {
    //   this.clienteConsultado = data;
    // });
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

  ngOnInit(): void {
    //this.clienteConsultado = this.consultarService.clienteConsultado[0];
  }
}
