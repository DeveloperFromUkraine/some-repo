import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatListModule, MatButtonModule, MatIconModule } from '@angular/material';

import { ExpandableFabItemComponent } from './expandable-fab-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
      ExpandableFabItemComponent
  ],
  exports: [
      ExpandableFabItemComponent
  ],
})
export class ExpandableFabItemModule {}
