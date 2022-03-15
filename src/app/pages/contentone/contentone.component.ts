import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contentone',
  templateUrl: './contentone.component.html',
  styleUrls: ['./contentone.component.scss']
})
export class ContentoneComponent implements OnInit {

  counter : number = 0;
  @Input() step : number = 1;
  @Output() numberChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  decrease(){
    console.log('is decreased');
    if(this.counter - this.step >= 0){
      this.counter -= this.step;
      this.numberChange.emit(this.counter);
    }
  }

  increase(){
    console.log('is increased');
    if(this.counter+this.step <= 100){
      this.counter += this.step;
      this.numberChange.emit(this.counter);
    }
  }

  

}
