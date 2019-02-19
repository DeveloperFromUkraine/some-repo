import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AccessibilityModule } from './accessibility/accessibility.module';
export { AccessibilityModule } from './accessibility/accessibility.module';

import { AvatarModule } from './avatar/avatar.module';
export { AvatarModule } from './avatar/avatar.module';

import { AvatarGroupModule } from './avatar-group/avatar-group.module';
export * from './avatar-group/avatar-group.module';
export * from './avatar-group/avatar-group.types';

import { ExpandableSearchModule } from './expandable-search/expandable-search.module';
export { ExpandableSearchModule } from './expandable-search/expandable-search.module';

import { FieldModule } from './field/field.module';
export { FieldModule } from './field/field.module';

import { LoggerModule } from './logging/logger.module';
export * from './logging/logger.module';

import { PageModule } from './page/page.module';
export * from './page/page.module';

import { RightDrawerModule } from './right-drawer/right-drawer.module';
export * from './right-drawer/right-drawer.module';

import {
  SidenavHeaderModule,
  SidenavListModule,
  SidenavListItemModule,
} from './sidenav';
export * from './sidenav';

import { ListItemModule } from './list-item/list-item.module';
export * from './list-item/list-item.component';

import {
  ListContentCardModule,
  ListContentModule,
  ListContentEmptyStateModule,
  ListContentPanelModule,
  ListContentUnselectedStateModule,
} from './list-content';
export * from './list-content';

// import {
//   EmptyStateComponent,
//   EmptyStateTitleComponent,
//   EmptyStateDescriptionComponent,
//   EmptyStateImageComponent,
// } from './empty-state/empty-state.component';
// export * from './empty-state/empty-state.component';
import { EmptyStateModule } from './empty-state/empty-state.module';
export * from './empty-state/empty-state.module';

import {
  ListSelectionAddButtonModule,
  ListSelectionModule,
  ListSelectionItemModule
} from './list-selection';
export * from './list-selection';

import {
  CardHeaderContainerModule,
  CardSubtitleModule,
  CardMainModule,
  CardAsideModule,
  CardTitleModule,
  CardSectionModule,
  CardSectionSubtitleModule,
  CardSectionTitleModule,
  CardActionsModule,
  CardToolbarModule,
} from './card';
export * from './card';

// import {
//   ListItemPrimaryTextComponent,
//   ListItemSecondaryTextComponent,
// } from './text/text.component';
// export * from './text/text.component';
import { TextModule } from './text/text.module';
export * from './text/text.module';

// import { SelectContainerComponent } from './select-container/select-container.component';
// export * from './select-container/select-container.component';
import { SelectContainerModule } from './select-container/select-container.module';
export * from './select-container/select-container.module';

import {
  FormGroupModule,
  FormSizingModule,
  NestableFormModule,
} from './form';
export * from './form';

import { ErrorBannerModule } from './error-banner/error-banner.module'
export * from './error-banner/error-banner.module'
// import { ErrorBannerComponent } from './error-banner/error-banner.component';
// export * from './error-banner/error-banner.component';


// import { InfoBannerComponent } from './info-banner/info-banner.component';
// export * from './info-banner/info-banner.component';
import { InfoBannerModule } from './info-banner/info-banner.module';
export * from './info-banner/info-banner.module';

import { ButtonGroupModule } from './button-group/button-group.module';
export * from './button-group/button-group.module';

// import { ExpandableFabComponent } from './expandable-fab/expandable-fab/expandable-fab.component';
// export * from './expandable-fab/expandable-fab/expandable-fab.component';
//
// import { ExpandableFabItemComponent } from './expandable-fab/expandable-fab-item.component';
// export * from './expandable-fab/expandable-fab-item.component';
// import { ExpandableFabItemModule } from './expandable-fab/expandable-fab-item.module';
import { ExpandableModule } from './expandable/expandable.module';
export * from './expandable/expandable.module';


// import { CenterComponent } from './center/center.component';
import { CenterModule } from './center/center.module';

// import { LoadingContainerComponent } from './loading-container/loading-container.component';
import { LoadingContainerModule } from './loading-container/loading-container.module';

// import { FooterComponent } from './footer/footer.component';
import { FooterModule } from './footer/footer.module';

import { TextListItemModule } from './text-list-item/text-list-item.module';
// import { TextListItemComponent } from './text-list-item/text-list-item.component';

import { DataTableContainerModule } from './data-table-container/data-table-container.module';
// import { DataTableContainerComponent } from './data-table-container/data-table-container.component';

// import { RightAlignContainerComponent } from './right-align-container/right-align-container.component';
import { RightAlignContainerModule } from './right-align-container/right-align-container.module';

// import { PersistentSearchComponent } from './persistent-search/persistent-search.component';
import { PersistentSearchModule } from './persistent-search/persistent-search.module';

// import { TranslationService } from './localization/translation.service';
// import { TranslationModule } from './localization/translation.module';

import { TranslationModule } from './localization/translation.module';
import { TranslationService } from './localization/translation.service';

// import {
//   InputMaskComponent,
//   DisplayModeDirective,
// } from './currency-input-mask/base-input-mask/input-mask.component';
import { InputMaskModule } from './currency-input-mask/base-input-mask/input-mask.module';
export * from './currency-input-mask/base-input-mask/input-mask.module';

// import { CurrencyMaskComponent } from './currency-input-mask/currency-mask/currency-mask.component';
// import { CurrencyMaskDirective } from './currency-input-mask/currency-mask/currency-mask.directive';

import { CurrencyMaskModule } from './currency-input-mask/currency-mask/currency-mask.module';
export * from './currency-input-mask/currency-mask/currency-mask.module';

// import { MessagesComponent } from './messages/messages.component';
// export * from './messages/messages.component';
import { MessagesModule } from './messages/messages.module';
export * from './messages/messages.module';

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
  // CardHeaderContainerComponent,
  // CardSubtitleComponent,
  // PageComponent,
  // RightDrawerComponent,
  // SideNavHeaderComponent,
  // SideNavListComponent,
  // SideNavListItemComponent,
  // ListContainerComponent,
  // ListContentComponent,
  // ListContentCardComponent,
  // ListItemComponent,
  // ListItemContentComponent,
  // ListItemPrimaryTextComponent,
  // ListItemSecondaryTextComponent,
  // ListContentPanelComponent,
  // ListContentEmptyStateComponent,
  // EmptyStateComponent,
  // EmptyStateTitleComponent,
  // EmptyStateDescriptionComponent,
  // EmptyStateImageComponent,
  // ListContentUnselectedStateComponent,
  // ListSelectionComponent,
  // ListSelectionItemComponent,
  // ListSelectionAddButtonComponent,
  // CardMainComponent,
  // CardAsideComponent,
  // CardTitleComponent,
  // CardSectionComponent,
  // CardSectionSubTitleComponent,
  // CardSectionTitleComponent,
  // CardActionsComponent,
  // CardToolbarComponent,
  // SelectContainerComponent,
  // FormGroupComponent,
  // ErrorBannerComponent,
  // InfoBannerComponent,
  // ExpandableFabComponent,
  // CenterComponent,
  // LoadingContainerComponent,
  // FooterComponent,
  // RightAlignContainerComponent,
  // PersistentSearchComponent,
  // InputMaskComponent,
  // CurrencyMaskComponent,
  // MessagesComponent
];

const directive = [
  // CurrencyMaskDirective,
  // NestableFormDirective,
  // SizingSmallDirective,
  // SizingMediumDirective,
  // SizingLargeDirective,
  // SizingFullDirective,
  // DisplayModeDirective
];

// const componentModules = [
//   AvatarModule,
//   AvatarGroupModule,
//   AccessibilityModule,
//   ButtonGroupModule,
//   ExpandableSearchModule,
//   FieldModule
// ];

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
    MatListModule,
    // ExpandableFabItemModule,
    TextListItemModule,
    DataTableContainerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    TranslationModule,
    MatSidenavModule,
    LoggerModule,
    MessagesModule,
    ErrorBannerModule,
    CurrencyMaskModule,
    InputMaskModule,
    PersistentSearchModule,
    RightAlignContainerModule,
    FooterModule,
    LoadingContainerModule,
    CenterModule,
    ExpandableModule,
    InfoBannerModule,
    FormGroupModule,
    SelectContainerModule,
    TextModule,
    CardMainModule,
    CardAsideModule,
    CardTitleModule,
    CardSectionModule,
    CardSectionSubtitleModule,
    CardSectionTitleModule,
    CardActionsModule,
    CardToolbarModule,
    CardHeaderContainerModule,
    CardSubtitleModule,
    ListSelectionAddButtonModule,
    ListSelectionModule,
    ListSelectionItemModule,
    EmptyStateModule,
    ListContentCardModule,
    ListContentModule,
    ListContentEmptyStateModule,
    ListContentPanelModule,
    ListContentUnselectedStateModule,
    SidenavHeaderModule,
    SidenavListModule,
    SidenavListItemModule,
    RightDrawerModule,
    PageModule,
    ListItemModule,
    FormSizingModule,
    NestableFormModule,
    AvatarModule,
    AvatarGroupModule,
    AccessibilityModule,
    ButtonGroupModule,
    ExpandableSearchModule,
    FieldModule,
    // ...componentModules
  ],
  declarations: [
      // ...components,
    // ...directive
  ],
  exports: [
    // ...components,
    // ...componentModules,
    // ExpandableFabItemComponent,
    // TextListItemComponent,
    // DataTableContsainerComponent,
    AvatarModule,
    AvatarGroupModule,
    AccessibilityModule,
    ButtonGroupModule,
    ExpandableSearchModule,
    FieldModule
  ],
  providers: [
      CurrencyPipe
  ],
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
