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
