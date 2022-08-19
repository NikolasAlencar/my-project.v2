import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../services/navigate.service';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private navigate: NavigateService, private service: HomeService) { }

  options$ = this.service.getOptions('optionsHome')

  public navegarOpcaoSelecionada = (path: string) => {
    this.navigate.navegarOpcaoSelecionada(path)
  };

  ngOnInit(): void {
    this.navigate.adicionaHistoria()
  }

}
