import { Component, Input } from '@angular/core';

@Component({
  selector: 'ign-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
})
export class FieldComponent {
  @Input() label: string;
}
