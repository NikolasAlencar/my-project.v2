import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    //private telaInicioService: TelaInicioService,
    //private registerService: RegisterService,
    //private loginService: LoginService,
    private router: Router,
    //private _bottomSheet: MatBottomSheet,
    private fb: FormBuilder
  ) {}

  public login = this.fb.group({
    usuario: ["", [Validators.required, Validators.minLength(7), Validators.maxLength(20)]],
    senha: ["", [Validators.required, Validators.minLength(7), Validators.maxLength(20)]]
  });

  //private urlAtual = this.route.snapshot.url.join("");
  public loading: boolean = false;

  entrar = () => {
    this.loading = true;
    if (this.login.valid === false) {
      this.login.markAllAsTouched();
      this.loading = false;
    } else {
      this.login.markAsUntouched();
      this.loading = false;
      this.router.navigate(["/consulta"]);
      //this.telaInicioService.entrar(this.login.value.usuario, this.login.value.senha);
    }
  };

  openBottomSheet(): void {
    //this._bottomSheet.open(BottomSheetComponent);
  }

  ngOnInit(): void {
    //this.subscriberService.verificaHasHeader(false);
    //this.telaInicioService.adicionaHistoria(this.urlAtual);
    //this.loginService.autenticado = false;
    //this.registerService.success = false;
  }
}
