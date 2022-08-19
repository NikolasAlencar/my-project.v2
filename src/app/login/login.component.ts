import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { NavigateService } from "../services/navigate.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    //private loginService: LoginService,
    private navigate: NavigateService,
    private fb: FormBuilder
  ) {}

  public login = this.fb.group({
    usuario: ["", [Validators.required, Validators.minLength(7), Validators.maxLength(20)]],
    senha: ["", [Validators.required, Validators.minLength(7), Validators.maxLength(20)]]
  });

  public loading: boolean = false;

  entrar(){
    this.loading = true;
    if (this.login.valid === false) {
      this.login.markAllAsTouched();
      this.loading = false;
    } else {
      this.login.markAsUntouched();
      this.loading = false;
      this.navigate.navegarParaConsulta()
      //this.telaInicioService.entrar(this.login.value.usuario, this.login.value.senha);
    }
  };

  registrar(){
    this.navigate.navegarParaRegistro()
  }

  ngOnInit(): void {
    this.navigate.adicionaHistoria()
    //this.loginService.autenticado = false;
    //this.registerService.success = false;
  }
}
