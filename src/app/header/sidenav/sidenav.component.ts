import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"]
})
export class SidenavComponent implements OnInit {
  constructor(private router: Router) {}

  optionsSidenav: any = [
    { name: "consultar-cliente", desc: "Consultar cliente", src: `../../../assets/img/consultar-cliente.png`, path: 'consulta'},
    { name: "cliente-bloqueado", desc: "Clientes bloqueados", src: `../../../assets/img/cliente-bloqueado.png` },
    { name: "cliente-restricao", desc: "Clientes com restrição", src: `../../../assets/img/cliente-restricao.png` },
    { name: "ligar", desc: "Me liga", src: `../../../assets/img/ligar.png` },
    { name: "cartão", desc: "Consultar cartão", src: `../../../assets/img/cartão.png` },
    { name: "pessoa", desc: "Consultar dispositivo", src: `../../../assets/img/pessoa.png` },
    { name: "dinheiro", desc: "Derivação Crivo", src: `../../../assets/img/dinheiro.png` },
    { name: "dinheiro", desc: "Derivação BrScan (RG)", src: `../../../assets/img/dinheiro.png` },
    { name: "derivacao-crivo", desc: "Solicitação de CAP (Backoffice)", src: `../../../assets/img/derivacao-crivo.png` },
    { name: "em-breve", desc: "Solicitação de CAP (Riscos)", src: `../../../assets/img/em-breve.png` },
    { name: "em-breve", desc: "Em breve...", src: `../../../assets/img/em-breve.png` },
    { name: "em-breve", desc: "Em breve...", src: `../../../assets/img/em-breve.png` },
    { name: "em-breve", desc: "Em breve...", src: `../../../assets/img/em-breve.png` },
    { name: "em-breve", desc: "Em breve...", src: `../../../assets/img/em-breve.png` },
    { name: "sair", desc: "Sair", src: `../../../assets/img/sair.png` }
  ];

  @Output() exit = new EventEmitter<boolean>()

  navegar(option: any){
    option.name === "sair" ? this.exit.emit(false) : this.router.navigate([option?.path]), this.exit.emit(false)
  }

  ngOnInit(): void {}
}
