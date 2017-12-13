import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatDatepickerModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { DateRangeComponent } from './date-range.component';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DateRangeComponent,
  ],
  exports: [
    DateRangeComponent,
  ],
})
export class DateRangeModule {}
