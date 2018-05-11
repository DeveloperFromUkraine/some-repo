import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { InputMaskComponent } from '../base-input-mask/input-mask.component';

@Component({
  selector: 'ign-currency-mask',
  templateUrl: `./currency-mask.html`,
  styleUrls: ['./currency-mask.scss'],
})
export class CurrencyMaskComponent implements OnInit {
  @Input() currencyCode: string;
  @Output() userValue = new EventEmitter<string>();

  displayModeBool: boolean;
  editModeBool: boolean;

  //on entry
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
