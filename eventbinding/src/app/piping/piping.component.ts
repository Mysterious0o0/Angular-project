import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piping',
  templateUrl: './piping.component.html',
  styleUrls: ['./piping.component.css']
})
export class PipingComponent implements OnInit {

  birthday: Date = new Date();
  pi: number = 3.1415926;

  size: number =4;
  constructor() { }

  ngOnInit() {
  }

}
