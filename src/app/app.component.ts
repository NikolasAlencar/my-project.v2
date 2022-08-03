import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, pipe, pluck, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-project.v2';

  hasHeader: boolean = true;

  constructor(public route: ActivatedRoute){}

  ngOnInit(): void {
  }
}


