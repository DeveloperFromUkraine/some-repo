import {
  Component,
  Input,
  ContentChild,
  Output,
  EventEmitter,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewChecked,
  ChangeDetectorRef,
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { DisplayModeDirective } from './input-mask.directive';

@Component({
  selector: 'ign-input-mask',
  templateUrl: './input-mask.html',
  styleUrls: ['./input-mask.css'],
})
export class InputMaskComponent implements OnInit, AfterViewChecked {
  @ContentChild(DisplayModeDirective) displayModeChild: DisplayModeDirective;
  @ViewChild('editableFieldInput') editableInputField: ElementRef;

  lastDisplayMode: boolean;
  currencypipe: CurrencyPipe;
  value = '';

  @Input() currencyCode: string;
  @Output() onValueChanged = new EventEmitter<string>();

  constructor(private cdRef: ChangeDetectorRef) {
    console.warn(
      `Deprecation warning: 'ign-input-mask' is being removed in the next release. Support for this component will be dropped soon.`
    );
  }

  onBlur() {
    this.onValueChanged.emit();
  }

  onEditBlur(editValue) {
    if (this.value !== editValue) {
      this.value = editValue;
    }
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
    if ((this.displayModeChild as any).displayMode !== this.lastDisplayMode) {
      this.setFocus();
      this.lastDisplayMode = !this.lastDisplayMode;
    }
    this.cdRef.detectChanges();
  }
}
