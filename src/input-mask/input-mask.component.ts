import {
  Component,
  Directive,
  HostListener,
  OnInit,
  AfterContentInit,
  Input,
  ContentChild,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Directive({
  selector: '[displayMode]',
  inputs: ['displayMode'],
})
export class DisplayMode {}

@Directive({
  selector: '[editMode]',
  inputs: ['editMode'],
})
export class EditMode {}

@Component({
  selector: 'ign-input-mask',
  templateUrl: './input-mask.html',
  styleUrls: ['./input-mask.scss'],
})
export class InputMaskComponent implements OnInit {
  @ContentChild(EditMode) editModeChild: EditMode;
  @ContentChild(DisplayMode) displayModeChild: DisplayMode;
  public displayTemplate: TemplateRef<any>;
  public editTemplate: TemplateRef<any>;
  currencypipe: CurrencyPipe;

  @Input() value: string;
  valueMasked: boolean;

  constructor(currencypipe: CurrencyPipe) {
    this.currencypipe = currencypipe;
  }

  //on blur
  @HostListener('blur', ['$event'])
  onBlur($event: any): void {}

  //on entry
  onClick() {}

  //on init
  ngOnInit() {
  }

  currencyPipe(value) {
    return(this.currencypipe.transform(value, 'USD', 'symbol', '.4'));
  }
}
