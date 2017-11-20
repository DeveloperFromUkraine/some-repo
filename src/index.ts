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
} from './sidenav';
export * from './sidenav';

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
} from './list-content';
export * from './list-content';

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
} from './list-selection';
export * from './list-selection';

import {
  CardHeaderContainerComponent,
  CardSubtitleComponent,
  CardContainerComponent,
  CardMainComponent,
  CardAsideComponent,
  CardTitleComponent,
  CardSectionComponent,
  CardSectionTitleComponent,
  CardActionsComponent,
  CardToolbarComponent,
} from './card';
export * from './card';

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
} from './form';
export * from './form';

import { ErrorBannerComponent } from './error-banner/error-banner.component';
export * from './error-banner/error-banner.component';

import { InfoBannerComponent } from './info-banner/info-banner.component';
export * from './info-banner/info-banner.component';

import { ButtonGroupComponent } from './button-group';
export * from './button-group';

import { ExpandableFabComponent } from './expandable-fab/expandable-fab.component';
export * from './expandable-fab/expandable-fab.component';

import { ExpandableFabItemComponent } from './expandable-fab/expandable-fab-item.component';
export * from './expandable-fab/expandable-fab-item.component';

import { FieldComponent } from './field/field.component';
export * from './field/field.component';

import { CenterComponent } from './center/center.component';

import {
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatSidenavModule,
  MatCardModule,
  MatIconModule,
  MatRippleModule,
} from '@angular/material';

import { AutocompletePlacesModule } from './autocomplete-places/autocomplete-places.module';
import { AutocompletePlacesComponent } from './autocomplete-places';
export * from './autocomplete-places';

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
    AutocompletePlacesModule,
  ],
  declarations: components,
  exports: [...components, AutocompletePlacesComponent],
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
