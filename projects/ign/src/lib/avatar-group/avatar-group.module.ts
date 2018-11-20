import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { AvatarModule } from '../avatar/avatar.module';
import { AvatarGroupComponent } from './avatar-group.component';
import { RouterModule } from '@angular/router';
import { TranslationModule } from '../localization/translation.module';

@NgModule({
  imports: [ CommonModule, RouterModule, TranslationModule, AvatarModule, MatButtonModule ],
  declarations: [ AvatarGroupComponent ],
  exports: [ AvatarModule, AvatarGroupComponent ]
})
export class AvatarGroupModule {}
