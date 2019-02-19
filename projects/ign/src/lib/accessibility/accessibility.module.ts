import { NgModule } from '@angular/core';
import { AccessibleClickDirective } from './accessible-click.directive';
import { AccessibleViewDirective } from './accessible-view.directive';
import { AccessibleRemoveViewDirective } from './accessible-remove-view.directive';
import { AccessibleContextMenuViewDirective } from './accessible-context-menu-view.directive';
import { AccessibleListItemRoleDirective } from './accessible-list-item-role.directive';
import { AccessibleTooltipDirective } from './accessible-tooltip.directive';
import { TranslationModule } from '../localization/translation.module';

@NgModule({
  imports: [
    TranslationModule
  ],
  declarations: [
    AccessibleClickDirective,
    AccessibleViewDirective,
    AccessibleRemoveViewDirective,
    AccessibleContextMenuViewDirective,
    AccessibleListItemRoleDirective,
    AccessibleTooltipDirective
  ],
  exports: [
    AccessibleClickDirective,
    AccessibleViewDirective,
    AccessibleRemoveViewDirective,
    AccessibleContextMenuViewDirective,
    AccessibleListItemRoleDirective,
    AccessibleTooltipDirective
  ]
})
export class AccessibilityModule {}
