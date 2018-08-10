import { Component, OnInit, OnChanges, SimpleChanges, SimpleChange, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-number-selector',
  templateUrl: './number-selector.component.html',
  styleUrls: ['./number-selector.component.css']
})

export class NumberSelectorComponent implements OnChanges,OnInit {
  @Input() value: number;
  @Input() defaultValue: number;
  @Input() pHolder: string;

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    // const value: SimpleChange = changes.defaultValue;
    // console.log('prev value: ', value.previousValue);
    // console.log('got name: ', value.currentValue);
    // this.value = value.currentValue;
  }
  ngOnInit() {
    this.value = this.defaultValue;
  }
  plus() {
    (this.value === undefined) ? this.value = 1 : this.value++;
    this.change.emit(this.value);
  }
  minus() {
    (!this.value || this.value === 1) ? this.value = undefined : this.value--;
    this.change.emit(this.value);
  }


}
