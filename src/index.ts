import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccessibleViewDirective, AccessibleClickDirective, ListItemRoleDirective} from './accessibility/accessibility.directive';
 

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

import { FieldComponent, FieldInlineComponent, EditableFieldComponent, EditableFieldInlineComponent } from './field/field.component';
export * from './field/field.component';

import { CenterComponent } from './center/center.component';

import { LoadingContainerComponent } from './loading-container/loading-container.component';
import { FooterComponent } from './footer/footer.component';

import { DateRangeModule } from './date-range/date-range.module';
import { DateRangeComponent } from './date-range/date-range.component';

import { TextListItemModule } from './text-list-item/text-list-item.module';
import { TextListItemComponent } from './text-list-item/text-list-item.component';
import { NavListModule } from './nav-list/nav-list.module';
import { NavListComponent } from './nav-list/nav-list.component';

import { DataTableContainerModule } from './data-table-container/data-table-container.module';
import { DataTableContainerComponent } from './data-table-container/data-table-container.component';

import { ExpandableSearchComponent } from './expandable-search/expandable-search.component';
import { RightAlignContainerComponent } from './right-align-container/right-align-container.component';

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
  MatListModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

const components = [
  AccessibleViewDirective, 
  AccessibleClickDirective, 
  ListItemRoleDirective,
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
  FieldInlineComponent,
  EditableFieldComponent,
  EditableFieldInlineComponent,
  CenterComponent,
  NestableFormDirective,
  LoadingContainerComponent,
  FooterComponent,
  ExpandableSearchComponent,
  RightAlignContainerComponent
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
    MatListModule,
    NavListModule,
    TextListItemModule,
    DataTableContainerModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: components,
  exports: [
    ...components,
    DateRangeComponent,
    NavListComponent,
    TextListItemComponent,
    DataTableContainerComponent
  ],
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
