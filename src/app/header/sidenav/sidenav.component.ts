import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { catchError, Observable, startWith, map } from "rxjs";
import { ErrorService } from "src/app/services/error.service";
import { HeaderService } from "../services/header.service";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"]
})
export class SidenavComponent implements OnInit {
  constructor(private router: Router, private service: HeaderService, private errorService: ErrorService) {}

  options$ =  this.service.getOptions('options-sidenav').pipe(catchError(async (error) => this.errorService.trazerErro()))

  @Output() exit = new EventEmitter<boolean>()

  // myControl = new FormControl('');
  // options: any = this.options$.forEach((option: { desc: any; }) => option.desc)
  // filteredOptions!: Observable<string[]>;

   ngOnInit(): void {}
  //   this.filteredOptions = this.myControl.valueChanges.pipe(
  //     startWith(''),
  //     map(value => this._filter(value || '')),
  //   );
  // }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter((option: string) => option.toLowerCase().includes(filterValue));
  // }

  navegar(option: any){
    option.name === "sair" ? this.exit.emit(false) : (this.router.navigate([option?.path]), this.exit.emit(false))
  }
}
