import { Component, Input, OnInit } from '@angular/core';
import { InputMaskComponent } from '../../input-mask/input-mask.component';

@Component({
  selector: 'ign-currency-mask',
  templateUrl: `./currency-mask.html`,
  styleUrls: ['./currency-mask.scss'],
})
export class CurrencyMaskComponent implements OnInit {
  @Input() value: string;
  displayModeBool: boolean;
  editModeBool: boolean;
  
    //on entry
    onClick() {}
  
    //on init
    ngOnInit() {
      this.displayModeBool = true;
      this.editModeBool = false;
    }
}
