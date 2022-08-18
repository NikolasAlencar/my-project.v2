import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { HeaderService } from "../services/header.service";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"]
})
export class SidenavComponent {
  constructor(private router: Router, private service: HeaderService) {}

  options$ =  this.service.getOptions('optionsSidenav')

  @Output() exit = new EventEmitter<boolean>()

  navegar(option: any){
    option.name === "sair" ? this.exit.emit(false) : (this.router.navigate([option?.path]), this.exit.emit(false))
  }
}
