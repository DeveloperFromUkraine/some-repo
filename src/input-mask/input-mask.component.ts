import {
  Component,
  Directive,
  Input,
  ContentChild,
  Output,
  EventEmitter
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Directive({
  selector: '[displayMode]',
  inputs: ['displayMode'],
})
export class DisplayMode {
}

@Component({
  selector: 'ign-input-mask',
  templateUrl: './input-mask.html',
  styleUrls: ['./input-mask.scss'],
})
export class InputMaskComponent {
  @ContentChild(DisplayMode) displayModeChild: DisplayMode;
  currencypipe: CurrencyPipe;

  @Input() value: string;
  @Output() onValueChanged = new EventEmitter<void>();

  constructor(currencypipe: CurrencyPipe) {
    this.currencypipe = currencypipe;
  }

  onBlur(){
    console.log(this.displayModeChild);
    this.onValueChanged.emit();
  }
}
