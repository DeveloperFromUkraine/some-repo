import { NgModule } from '@angular/core';
import { AccessibleClickDirective } from './accessible-click.directive';

@NgModule({
  declarations: [
    AccessibleClickDirective
  ],
  exports: [
    AccessibleClickDirective
  ]
})
export class AccessibilityModule {}
