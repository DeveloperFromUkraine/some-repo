import { NgModule } from '@angular/core';
import { AvatarComponent } from './avatar.component';
import { MatTooltipModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [ MatIconModule, MatTooltipModule ],
  declarations: [ AvatarComponent ],
  exports: [ AvatarComponent ]
})
export class AvatarModule {}
