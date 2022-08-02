import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-project.v2';

  hasHeader: any;

  constructor(public route: ActivatedRoute){
    this.route.data.subscribe(header => {
      this.hasHeader = header
      console.log(header)
    })
  }

  ngOnInit(): void {}
}


