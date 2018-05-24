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
  ChangeDetectorRef,
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Directive({
  selector: '[displayMode]',
})
export class DisplayMode {
  @Input() displayMode;
}

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
  value = '';

  @Input() currencyCode: string;
  @Output() onValueChanged = new EventEmitter<string>();

  constructor(private cdRef: ChangeDetectorRef) {}

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
