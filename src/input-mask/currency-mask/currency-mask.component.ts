import { Component, Input, OnInit, HostListener } from '@angular/core';
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
  onClick() {
    this.displayModeBool = false;
  }

  //on init
  ngOnInit() {
    this.displayModeBool = true;
  }

  onBlur(){
     this.displayModeBool = true;
  }
}
