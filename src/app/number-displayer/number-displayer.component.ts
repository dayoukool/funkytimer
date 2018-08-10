import { Component, OnInit, OnChanges, SimpleChanges, SimpleChange, Input } from '@angular/core';

@Component({
  selector: 'app-number-displayer',
  templateUrl: './number-displayer.component.html',
  styleUrls: ['./number-displayer.component.css']
})
export class NumberDisplayerComponent implements OnChanges,OnInit {
  @Input() value: number;
  private changeStatus: boolean;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.changeStatus = true ;
    const value: SimpleChange = changes.value;
    this.value = value.currentValue;
    this.changeStatus = false ;
  }

  ngOnInit() {
  }

}
