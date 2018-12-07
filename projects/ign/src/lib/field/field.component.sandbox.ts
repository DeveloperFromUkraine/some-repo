import { sandboxOf } from 'angular-playground';
import {
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatCardModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FieldComponent } from './field.component';
import { CommonModule } from '@angular/common';
import { FieldInlineComponent } from './inline-field.component';
import { EditableFieldComponent } from './editable-field.component';
import { EditableFieldInlineComponent } from './editable-field-inline.component';

export default sandboxOf(FieldComponent, {
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule
  ],
  declarations: [
    FieldInlineComponent,
    EditableFieldComponent,
    EditableFieldInlineComponent
  ]
}).add('Field components', {
  template: `
    <mat-card>
      <mat-card-header>Field</mat-card-header>
      <mat-card-content>
        <ign-field label="The Answer">
          42
        </ign-field>
      </mat-card-content>
    </mat-card>
    <mat-card>
      <mat-card-header>Inline Field</mat-card-header>
      <mat-card-content>
        <ign-field-inline label="The Answer">
          42
        </ign-field-inline>
      </mat-card-content>
    </mat-card>
    <mat-card>
      <mat-card-header>Editable Field</mat-card-header>
      <mat-card-content>
        <ign-editable-field label="The Answer">
          42
        </ign-editable-field>
      </mat-card-content>
    </mat-card>
    <mat-card>
      <mat-card-header>Editable Inline Field</mat-card-header>
      <mat-card-content>
        <ign-editable-field-inline label="The Answer">
          42
        </ign-editable-field-inline>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    mat-card {
      margin: 20px;
    }
  `, `
    mat-card-header {
      border-bottom: 1px solid black;
      margin-bottom: 10px;
    }
  `]
});
