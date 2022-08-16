import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  open: boolean = false;

  @Output() openedOrClosed = new EventEmitter<boolean>()

  openAndClose(openedOrClosed: boolean){
    this.open = openedOrClosed;
    this.openedOrClosed.emit(openedOrClosed)
  }

  ngOnInit(): void {}

}
