import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarComponent } from './avatar.component';
import { MatTooltipModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [ CommonModule, MatIconModule, MatTooltipModule ],
  declarations: [ AvatarComponent ],
  exports: [ CommonModule, AvatarComponent ]
})
export class AvatarModule {}
