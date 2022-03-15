import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxMinMeterComponent } from './max-min-meter.component';

describe('MaxMinMeterComponent', () => {
  let component: MaxMinMeterComponent;
  let fixture: ComponentFixture<MaxMinMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxMinMeterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxMinMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
