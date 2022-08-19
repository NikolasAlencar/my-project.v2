import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: RegisterService) {}

  registrar = this.fb.group({
    usuario: ['', Validators.required],
    senha: ['', Validators.required],
    email: ['', Validators.required]
  });

  options$ = this.service.getOptions('optionsRegister')

  cadastrar(){
    console.log('Cadastrou-se!')
    console.log(this.registrar.value)
  }

  ngOnInit(): void {}
}
