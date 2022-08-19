import { Component, OnInit } from "@angular/core";
import { CrivoService } from "./services/crivo.service";

@Component({
  selector: "app-crivo",
  templateUrl: "./crivo.component.html",
  styleUrls: ["./crivo.component.scss"]
})
export class CrivoComponent implements OnInit {

  constructor(private service: CrivoService){}

  options$ = this.service.getOptions('optionsCrivo')

  public legendas: Array<string> = ["green", "red", "yellow", "grey"];

  public status: string = `Aprovado`;
  public codAnalise: string = `0038ep`;

  public reprocessar(): void {
    console.log("REPROCESSAR");
  }

  public reprovar(): void {
    console.log("REPROVAR");
  }

  ngOnInit(): void {}
}
