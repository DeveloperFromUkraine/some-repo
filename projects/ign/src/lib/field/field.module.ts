import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule, MatButtonModule, MatFormFieldModule } from '@angular/material';

import { EditableFieldComponent } from './editable-field.component';
import { EditableFieldInlineComponent } from './editable-field-inline.component';
import { FieldComponent } from './field.component';
import { FieldInlineComponent } from './inline-field.component';

const fieldComponents = [
  EditableFieldComponent,
  EditableFieldInlineComponent,
  FieldComponent,
  FieldInlineComponent
];

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule
  ],
  declarations: [ ...fieldComponents ],
  exports: [ CommonModule, ...fieldComponents ]
})
export class FieldModule {}
