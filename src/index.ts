import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageComponent } from './page/page.component';
export * from './page/page.component';

import { RightDrawerComponent } from './right-drawer/right-drawer.component';
export * from './right-drawer/right-drawer.component';

import {
  SideNavHeaderComponent,
  SideNavListComponent,
  SideNavListItemComponent,
} from './sidenav/index';
export * from './sidenav/index';

import {
  ListItemComponent,
  ListItemContentComponent,
  ListContainerComponent,
} from './list-item/list-item.component';
export * from './list-item/list-item.component';

import {
  ListContentCardComponent,
  ListContentComponent,
  ListContentEmptyStateComponent,
  ListContentPanelComponent,
  ListContentUnselectedStateComponent,
} from './list-content/index';
export * from './list-content/index';

import {
  EmptyStateComponent,
  EmptyStateTitleComponent,
  EmptyStateDescriptionComponent,
  EmptyStateImageComponent,
} from './empty-state/empty-state.component';
export * from './empty-state/empty-state.component';

import {
  ListFilterPipe,
  ListSelectionAddButtonComponent,
  ListSelectionComponent,
  ListSelectionItemComponent,
  ListSelectionSearchComponent,
} from './list-selection/index';
export * from './list-selection/index';

import {
  CardHeaderContainerComponent,
  CardSubtitleComponent,
  CardMainComponent,
  CardAsideComponent,
  CardTitleComponent,
  CardSectionComponent,
  CardSectionSubTitleComponent,
  CardSectionTitleComponent,
  CardActionsComponent,
  CardToolbarComponent,
} from './card/index';
export * from './card/index';

import {
  ListItemPrimaryTextComponent,
  ListItemSecondaryTextComponent,
} from './text/text.component';
export * from './text/text.component';

import { SelectContainerComponent } from './select-container/select-container.component';
export * from './select-container/select-container.component';

import {
  FormGroupComponent,
  SizingFullDirective,
  SizingLargeDirective,
  SizingMediumDirective,
  SizingSmallDirective,
  NestableFormDirective,
} from './form/index';
export * from './form/index';

import { ErrorBannerComponent } from './error-banner/error-banner.component';
export * from './error-banner/error-banner.component';

import { InfoBannerComponent } from './info-banner/info-banner.component';
export * from './info-banner/info-banner.component';

import { ButtonGroupComponent } from './button-group/index';
export * from './button-group/index';

import { ExpandableFabComponent } from './expandable-fab/expandable-fab.component';
export * from './expandable-fab/expandable-fab.component';

import { ExpandableFabItemComponent } from './expandable-fab/expandable-fab-item.component';
export * from './expandable-fab/expandable-fab-item.component';
import { ExpandableFabItemModule } from './expandable-fab/expandable-fab-item.module';

import {
  FieldComponent,
  FieldInlineComponent,
  EditableFieldComponent,
  EditableFieldInlineComponent,
} from './field/field.component';
export * from './field/field.component';

import { CenterComponent } from './center/center.component';

import { LoadingContainerComponent } from './loading-container/loading-container.component';
import { FooterComponent } from './footer/footer.component';

import { DateRangeModule } from './date-range/date-range.module';
import { DateRangeComponent } from './date-range/date-range.component';

import { TextListItemModule } from './text-list-item/text-list-item.module';
import { TextListItemComponent } from './text-list-item/text-list-item.component';

import { DataTableContainerModule } from './data-table-container/data-table-container.module';
import { DataTableContainerComponent } from './data-table-container/data-table-container.component';

import { ExpandableSearchComponent } from './expandable-search/expandable-search.component';
import { RightAlignContainerComponent } from './right-align-container/right-align-container.component';

import { ListSearchComponent } from './list-search/list-search.component';

import {
  AccessibleClickDirective,
  AccessibleViewDirective,
  AccessibleRemoveViewDirective,
  AccessibleContextMenuViewDirective,
  ListItemRoleDirective,
  ToolTipDirective,
} from './accessibility/accessibility.directive';

import { TranslationService } from './localization/translation.service';

import { TranslationModule } from './localization/translation.module';
import { AvatarComponent } from './avatar/avatar.component';
import { AvatarGroupComponent } from './avatar-group/avatar-group.component';
export * from './avatar-group/avatar-group.types';

import {
  InputMaskComponent,
  DisplayModeDirective,
} from './currency-input-mask/base-input-mask/input-mask.component';
import { CurrencyMaskComponent } from './currency-input-mask/currency-mask/currency-mask.component';
import { CurrencyMaskDirective } from './currency-input-mask/currency-mask/currency-mask.directive';

import { MessagesComponent } from './messages/messages.component';
export * from './messages/messages.component';

import {
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatRippleModule,
  MatProgressSpinnerModule,
  MatNativeDateModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatSidenavModule,
} from '@angular/material';

const components = [
  CardHeaderContainerComponent,
  CardSubtitleComponent,
  PageComponent,
  RightDrawerComponent,
  SideNavHeaderComponent,
  SideNavListComponent,
  SideNavListItemComponent,
  ListContainerComponent,
  ListContentComponent,
  ListContentCardComponent,
  ListItemComponent,
  ListItemContentComponent,
  ListItemPrimaryTextComponent,
  ListItemSecondaryTextComponent,
  ListContentPanelComponent,
  ListContentEmptyStateComponent,
  EmptyStateComponent,
  EmptyStateTitleComponent,
  EmptyStateDescriptionComponent,
  EmptyStateImageComponent,
  ListContentUnselectedStateComponent,
  ListSelectionComponent,
  ListSelectionItemComponent,
  ListSelectionSearchComponent,
  ListFilterPipe,
  ListSelectionAddButtonComponent,
  CardMainComponent,
  CardAsideComponent,
  CardTitleComponent,
  CardSectionComponent,
  CardSectionSubTitleComponent,
  CardSectionTitleComponent,
  CardActionsComponent,
  CardToolbarComponent,
  SelectContainerComponent,
  FormGroupComponent,
  SizingSmallDirective,
  SizingMediumDirective,
  SizingLargeDirective,
  SizingFullDirective,
  ErrorBannerComponent,
  InfoBannerComponent,
  ButtonGroupComponent,
  ExpandableFabComponent,
  FieldComponent,
  FieldInlineComponent,
  EditableFieldComponent,
  EditableFieldInlineComponent,
  CenterComponent,
  NestableFormDirective,
  LoadingContainerComponent,
  FooterComponent,
  ExpandableSearchComponent,
  RightAlignContainerComponent,
  ListSearchComponent,
  AccessibleClickDirective,
  AccessibleViewDirective,
  AccessibleRemoveViewDirective,
  AccessibleContextMenuViewDirective,
  ListItemRoleDirective,
  ToolTipDirective,
  AvatarComponent,
  AvatarGroupComponent,
  DisplayModeDirective,
  InputMaskComponent,
  CurrencyMaskComponent,
  CurrencyMaskDirective,
  MessagesComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    DateRangeModule,
    MatListModule,
    ExpandableFabItemModule,
    TextListItemModule,
    DataTableContainerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    TranslationModule,
    MatSidenavModule,
  ],
  declarations: components,
  exports: [
    ...components,
    DateRangeComponent,
    ExpandableFabItemComponent,
    TextListItemComponent,
    DataTableContainerComponent,
  ],
  providers: [TranslationService, CurrencyPipe],
})
export class IgniteDesignSystemModule {
  static updateTranslation(translationKey: string, translationValue: string) {
    TranslationService.updateTranslation(translationKey, translationValue);
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IgniteDesignSystemModule,
      providers: [],
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: IgniteDesignSystemModule,
    };
  }
}
