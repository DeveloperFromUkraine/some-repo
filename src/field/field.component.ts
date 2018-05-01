import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ign-field',
  template: `
    <div da="fieldValue" class="value"><ng-content></ng-content></div>
    <div class="label">{{label}}</div>
  `,
  styleUrls: ['field.component.scss'],
})
export class FieldComponent {
  @Input() label: string;
}

@Component({
  selector: 'ign-field-inline',
  template: `
    <div da="fieldValue" class="value">
    <span class="label">{{label}}</span>
    <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['field.component.scss'],
})
export class FieldInlineComponent extends FieldComponent {}
@Component({
  selector: 'ign-editable-field',
  template: `
    <div class="label-container">
    <div [attr.da]="da" class="value flex-lable-value"><ng-content></ng-content></div>
    <button [attr.da]="daButton" mat-icon-button class="mat-icon-button" (click)=handleClick()>
      <mat-icon>{{editIcon}}</mat-icon>
    </button>
    </div>
    <div class="label">{{label}}</div>
  `,
  styleUrls: ['field.component.scss'],
})
export class EditableFieldComponent extends FieldComponent {
  @Input() editIcon = 'mode_edit';
  @Input() da: string;
  @Input() daButton: string;
  @Output() onIconClick: EventEmitter<any> = new EventEmitter();

  handleClick() {
    this.onIconClick.emit();
  }
}

@Component({
  selector: 'ign-editable-field-inline',
  template: `
    <div class="label-container">
      <div da="fieldValue" class="value flex-lable-value">
      <span class="label">{{label}}</span>
      <ng-content></ng-content>
      </div>
      <button mat-icon-button class="mat-icon-button" (click)=handleClick()>
      <mat-icon>{{editIcon}}</mat-icon>
      </button>
    </div>
  `,
  styleUrls: ['field.component.scss'],
})
export class EditableFieldInlineComponent extends EditableFieldComponent {}
