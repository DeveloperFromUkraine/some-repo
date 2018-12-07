import { Component, Input } from '@angular/core';

@Component({
  selector: 'ign-field',
  templateUrl: './field.component.html',
  styleUrls: ['field.component.scss'],
})
export class FieldComponent {
  @Input() label: string;
}
