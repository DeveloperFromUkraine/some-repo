import { NgModule } from '@angular/core';
import { DataTableContainerComponent } from './data-table-container.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [MatPaginatorModule, MatTableModule],
  declarations: [DataTableContainerComponent],
  exports: [DataTableContainerComponent],
})
export class DataTableContainerModule {}
