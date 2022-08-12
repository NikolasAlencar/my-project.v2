import { Component, HostListener, OnInit } from "@angular/core";
import { Cols } from "src/assets/model/Cols";
import { ajustaGrid } from "src/assets/util/ajustaGrid";

@Component({
  selector: "app-conta-digital",
  templateUrl: "./conta-digital.component.html",
  styleUrls: ["./conta-digital.component.scss"]
})
export class ContaDigitalComponent implements OnInit {

  public innerWidth = ajustaGrid()

  @HostListener("window:resize")
  onResize() {
    this.innerWidth = ajustaGrid()
  }

  constructor() // public telaInicioService: TelaInicioService,private observableMedia: MediaObserver,
  // private consultarService: ConsultarService,
  // private subscriberService: SubscriberService
  {
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
    console.log(window.screen.width);
    //this.clienteConsultado = this.consultarService.clienteConsultado[0];
    // const grid = new Map([
    //   ["xs", 1],
    //   ["sm", 2],
    //   ["md", 3],
    //   ["lg", 4],
    //   ["xl", 5]
    // ]);
    // let start: any;
    // grid.forEach((cols, mqAlias) => {
    //   if (this.observableMedia.isActive(mqAlias)) {
    //     start = cols;
    //   }
    // });
    // this.cols = this.observableMedia.asObservable()
    //   map((change: { mqAlias: string; }) => grid.get(change.mqAlias))
    //   startWith(start);
  }
}
