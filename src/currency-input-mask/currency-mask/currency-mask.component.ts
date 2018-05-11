import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ign-currency-mask',
  templateUrl: `./currency-mask.html`
})
export class CurrencyMaskComponent implements OnInit {
  @Input() currencyCode: string;
  @Output() userValue = new EventEmitter<string>();

  displayModeBool: boolean;

  onClick() {
    this.displayModeBool = false;
  }

  ngOnInit() {
    this.displayModeBool = true;
  }

  onBlur(newValue: string) {
    this.userValue.emit(newValue || '');
    this.displayModeBool = true;
  }
}
