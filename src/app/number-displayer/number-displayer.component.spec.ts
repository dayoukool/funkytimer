import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberDisplayerComponent } from './number-displayer.component';

describe('NumberDisplayerComponent', () => {
  let component: NumberDisplayerComponent;
  let fixture: ComponentFixture<NumberDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
