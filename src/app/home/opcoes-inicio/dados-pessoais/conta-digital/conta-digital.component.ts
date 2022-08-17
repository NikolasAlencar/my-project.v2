import { Component, HostListener, Input, OnInit } from "@angular/core";
import { ajustaGrid } from "src/assets/util/ajustaGrid";
import { camelize } from "src/assets/util/camelize";

@Component({
  selector: "app-conta-digital",
  templateUrl: "./conta-digital.component.html",
  styleUrls: ["./conta-digital.component.scss"]
})
export class ContaDigitalComponent implements OnInit {
  public innerWidth = ajustaGrid();

  @HostListener("window:resize")
  onResize() {
    this.innerWidth = ajustaGrid();
  }

  constructor() // public telaInicioService: TelaInicioService,private observableMedia: MediaObserver,
  // private consultarService: ConsultarService,
  // private subscriberService: SubscriberService
  {
    // this.subscriberService.updateDataHome.subscribe(data => {
    //   this.clienteConsultado = data;
    // });
  }

  camelize: any = camelize

  @Input() clienteConsultado: any

  optionsContaDigital: any = [
    { desc: "Cadastro iniciado em" },
    { desc: "Agência" },
    { desc: "Conta" },
    { desc: "Cadastro criado em" }
  ];

  ngOnInit(): void {}
}
