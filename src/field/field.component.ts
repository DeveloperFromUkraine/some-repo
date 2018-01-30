import { Component, Input } from '@angular/core';

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
export class FieldInlineComponent {
    @Input() label: string;
}
