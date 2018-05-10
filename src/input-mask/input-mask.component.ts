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
  @ContentChild(EditMode) editMode: EditMode;
  @ContentChild(DisplayMode) displayMode: DisplayMode;
  public displayTemplate: TemplateRef<any>;
  public editTemplate: TemplateRef<any>;

  number123 = 123;
  test = { number: this.number123 };

  @Input() value: string;
  valueMasked: boolean;

  constructor() {}

  //on blur
  @HostListener('blur', ['$event'])
  onBlur($event: any): void {}

  //on entry
  onClick() {}

  //on init
  ngOnInit() {}
}
