import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

import { DividerComponent } from './divider/divider.component';
export * from './divider/divider.component';

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
  CardContainerComponent,
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

import { HubCardComponent } from './hub-card/hub-card.component';
export * from './hub-card/hub-card.component';

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

import { FieldComponent } from './field/field.component';
export * from './field/field.component';

import { CenterComponent } from './center/center.component';

import { LoadingContainer } from './loading-container/loading-container.component';

import { DateRangeModule } from './date-range/date-range.module';
import { DateRangeComponent } from './date-range/date-range.component';

import {
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatSidenavModule,
  MatCardModule,
  MatIconModule,
  MatRippleModule,
  MatProgressSpinnerModule,
  MatNativeDateModule,
} from '@angular/material';

const components = [
  CardHeaderContainerComponent,
  CardSubtitleComponent,
  DividerComponent,
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
  CardContainerComponent,
  CardMainComponent,
  CardAsideComponent,
  CardTitleComponent,
  CardSectionComponent,
  CardSectionSubTitleComponent,
  CardSectionTitleComponent,
  CardActionsComponent,
  CardToolbarComponent,
  HubCardComponent,
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
  ExpandableFabItemComponent,
  FieldComponent,
  CenterComponent,
  NestableFormDirective,
  LoadingContainer,
];

@NgModule({
  imports: [
    CommonModule,
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
  ],
  declarations: components,
  exports: [...components, DateRangeComponent],
})
export class IgniteDesignSystemModule {
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
