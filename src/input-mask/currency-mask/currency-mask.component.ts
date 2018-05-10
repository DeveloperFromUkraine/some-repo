import { Component, Input } from '@angular/core';
import { InputMaskComponent } from '../../input-mask/input-mask.component';

@Component({
  selector: 'ign-currency-mask',
  templateUrl: `./currency-mask.html`,
  styleUrls: ['./currency-mask.scss'],
})
export class CurrencyMaskComponent {
  @Input() value: string;
}
