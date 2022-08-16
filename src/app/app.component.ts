import { Component, OnInit } from "@angular/core";
import { ActivationStart, Router } from "@angular/router";
import { filter } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "my-project.v2";

  hasHeader!: boolean;

  constructor(public router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof ActivationStart)).subscribe((event: any) => {
        if(!this.hasHeader) this.hasHeader = event?.snapshot?.routeConfig?.data?.header
    })
  }

  opened = false;

  openOrClose($event: boolean){
    this.opened = this.opened === $event ? !$event : $event
  }

  ngOnInit(): void {}
}
