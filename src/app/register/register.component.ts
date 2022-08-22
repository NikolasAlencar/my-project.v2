import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { distinctUntilChanged, filter, switchMap } from 'rxjs/operators'
import { NavigateService } from '../services/navigate.service';
import { RegisterService } from './services/register.service';
import * as _ from "lodash";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: RegisterService, private navigate: NavigateService) {}

  registrar = this.fb.group({
    usuario: ['', [Validators.required, Validators.minLength(7)]],
    senha: ['', [Validators.required, Validators.minLength(7)]],
    email: ['', [Validators.required, Validators.email]]
  });

  options$ = this.service.getOptions('optionsRegister')
  emailEnviado: boolean = false;

  cadastrar(){
    console.log(this.registrar)
  }

  voltarLogin(){
    this.navigate.navegarParaLogin();
  }

  adicionarFiltros(abstractControl: AbstractControl, filtro: number, userOrEmail: string){
    return abstractControl?.valueChanges.pipe(
      debounceTime(500),
      filter(valor => valor >= filtro || valor.length),
      distinctUntilChanged(),
      userOrEmail === 'user' ?
      switchMap(valor => this.service.getUser(valor)) :
      switchMap(valor => this.service.getUserByEmail(valor))
    ).subscribe(valor => _.isEmpty(valor) ? '' : abstractControl.setErrors({jaExiste: true}))
  }

  ngOnInit(): void {
    this.adicionarFiltros(this.registrar.get('usuario') as AbstractControl, 7, 'user')
    this.adicionarFiltros(this.registrar.get('email') as AbstractControl, 7, 'email')
  }
}
