import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square-flex',
  templateUrl: './square-flex.component.html',
  styleUrls: ['./square-flex.component.scss']
})
export class SquareFlexComponent implements OnInit {

  @Input() divWidth = 100;
  @Input() divHeight = 250;

  constructor() { }

  ngOnInit(): void {
  }

  squareWidth(value: number) {
    alert(value);
    
  }

}
