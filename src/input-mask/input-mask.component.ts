import {
  Component,
  Directive,
  Input,
  ContentChild,
  Output,
  EventEmitter,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewChecked,
  HostListener,
  Renderer2
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CurrencyMaskDirective } from './currency-mask/currency-mask.directive'

@Directive({
  selector: '[displayMode]',
  inputs: ['displayMode'],
})
export class DisplayMode {}

@Component({
  selector: 'ign-input-mask',
  templateUrl: './input-mask.html',
  styleUrls: ['./input-mask.scss'],
})
export class InputMaskComponent implements OnInit, AfterViewChecked {
  @ContentChild(DisplayMode) displayModeChild: DisplayMode;
  @ViewChild('editableFieldInput') editableInputField: ElementRef;

  lastDisplayMode: boolean;
  currencypipe: CurrencyPipe;

  @Input() value: string;
  @Output() onValueChanged = new EventEmitter<string>();

  constructor(currencypipe: CurrencyPipe) {
    this.currencypipe = currencypipe;
  }
  onBlur() {
    this.onValueChanged.emit();
  }

  onEditBlur(editValue) {
    this.value = editValue;
    this.onValueChanged.emit(this.value);
  }

  ngOnInit() {
    this.lastDisplayMode = (this.displayModeChild as any).displayMode;
  }

  setFocus() {
    if (!(this.displayModeChild as any).displayMode) {
      this.editableInputField.nativeElement.focus();
    }
  }

  ngAfterViewChecked() {
    setTimeout(() => {
      if ((this.displayModeChild as any).displayMode !== this.lastDisplayMode) {
        this.setFocus();
        this.lastDisplayMode = !this.lastDisplayMode;
      }
    });
  }
}
