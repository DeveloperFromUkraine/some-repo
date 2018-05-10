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
export class DisplayMode {
}

@Component({
  selector: 'ign-input-mask',
  templateUrl: './input-mask.html',
  styleUrls: ['./input-mask.scss'],
})
export class InputMaskComponent implements OnInit {
  @ContentChild(DisplayMode) displayModeChild: DisplayMode;

  public displayTemplate: TemplateRef<any>;
  public editTemplate: TemplateRef<any>;
  currencypipe: CurrencyPipe;

  @Input() value: string;
  valueMasked: boolean;

  constructor(currencypipe: CurrencyPipe) {
    this.currencypipe = currencypipe;
  }

  ngOnInit(){
  }
}
