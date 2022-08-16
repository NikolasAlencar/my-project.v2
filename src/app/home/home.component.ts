import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  public opcoes: Array<any> = [
    { nome: "Dados pessoais", id: 1, path: "dados-pessoais" },
    { nome: "Crivo", id: 2, path: "crivo" },
    { nome: "PLD", id: 3, path: "" },
    { nome: "Identificação biométrica", id: 4, path: "" },
    { nome: "Notificações", id: 6, path: "" },
    { nome: "Bloquear/Desbloquear dispositivo" },
    { nome: "Portabilidade", id: 7, path: "" },
    { nome: "Comprovantes", id: 8, path: "" },
    { nome: "Token", id: 9, path: "" },
    { nome: "Token - Log", id: 10, path: "" },
    { nome: "Cartões", id: 11, path: "" },
    { nome: "Cartões BCD", id: 12, path: "" },
    { nome: "MGM", id: 13, path: "" }
  ];

  public navegarOpcaoSelecionada = (path: string) => {
    console.log('Navegou', path)
    this.router.navigate([`home/${path}`])
  };

  ngOnInit(): void {
  }

}
