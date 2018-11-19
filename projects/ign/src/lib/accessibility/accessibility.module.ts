import { NgModule } from '@angular/core';
import { AccessibleClickDirective } from './accessible-click.directive';
import { AccessibleViewDirective } from './accessible-view.directive';

@NgModule({
  declarations: [
    AccessibleClickDirective,
    AccessibleViewDirective
  ],
  exports: [
    AccessibleClickDirective,
    AccessibleViewDirective
  ]
})
export class AccessibilityModule {}
