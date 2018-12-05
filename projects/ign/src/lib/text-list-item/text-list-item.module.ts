import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material';
import { TextListItemComponent } from './text-list-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, MatListModule],
  declarations: [TextListItemComponent],
  exports: [TextListItemComponent],
})
export class TextListItemModule {}
