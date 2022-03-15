import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentoneComponent } from './contentone.component';

describe('ContentoneComponent', () => {
  let component: ContentoneComponent;
  let fixture: ComponentFixture<ContentoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
