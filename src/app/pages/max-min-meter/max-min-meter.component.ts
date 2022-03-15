import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-max-min-meter',
  templateUrl: './max-min-meter.component.html',
  styleUrls: ['./max-min-meter.component.scss']
})
export class MaxMinMeterComponent implements OnInit {
  @Input() minLabel = 'minLabela';
  @Input() maxLabel = 'maxLabelb';

  @Output() minChange = new EventEmitter();
  @Output() maxChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  doMinChange(value: number) {
    this.minChange.emit(value);
  }

  doMaxChange(value: number) {
    this.maxChange.emit(value);
  }

}
