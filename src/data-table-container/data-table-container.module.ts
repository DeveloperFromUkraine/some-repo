import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material';
import { DataTableContainerComponent } from './data-table-container.component';

@NgModule({
  imports: [
    MatPaginatorModule,
  ],
  declarations: [
    DataTableContainerComponent,
  ],
  exports: [
    DataTableContainerComponent,
  ],
})
export class DataTableContainerModule {}
