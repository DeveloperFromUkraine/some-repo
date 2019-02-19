import { Component, Input, Output, EventEmitter, ChangeDetectorRef, OnInit } from '@angular/core';

import { TranslationPipe } from '../localization/translation.pipe';
import { FieldComponent } from './field.component';

@Component({
  selector: 'ign-editable-field',
  templateUrl: './editable-field.component.html',
  styleUrls: ['./field.component.css'],
})
export class EditableFieldComponent extends FieldComponent implements OnInit {
  @Input() ariaBtnLabel;
  @Input() editIcon = 'mode_edit';
  @Input() da: string;
  @Input() daButton: string;
  @Output() onIconClick: EventEmitter<any> = new EventEmitter();

  constructor(private _cdr: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
    const pipe = new TranslationPipe(this._cdr);
    this.ariaBtnLabel = pipe.transform('EDIT');
  }

  handleClick() {
    this.onIconClick.emit();
  }
}
