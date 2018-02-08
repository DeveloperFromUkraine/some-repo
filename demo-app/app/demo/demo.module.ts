import { NgModule } from '@angular/core';

import { MarkdownModule } from '../markdown/markdown.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DemoDialogComponent } from './demo-dialog/demo-dialog.component';
import { DemoDialogComponentDialog, DemoDialogComponentDialogBackground } from './demo-dialog/demo-dialog.component';
import { DemoDialogAcceptCancelComponent } from './demo-dialog/dialog-accept-cancel/dialog-accept-cancel.component';
import { DemoRadioButtonComponent } from './demo-radio-button/demo-radio-button.component';
import { DemoCheckboxComponent } from './demo-checkbox/demo-checkbox.component';
import { DemoCardComponent } from './demo-card/demo-card.component';
import { DemoCenterComponent } from './demo-center/demo-center.component';
import { DemoDateRangeComponent } from './demo-date-range/demo-date-range.component';
import { DemoDividerComponent } from './demo-divider/demo-divider.component';
import { DemoEmptyStateComponent } from './demo-empty-state/demo-empty-state.component';
import { DemoEmptyStateExampleComponent } from './demo-empty-state/demo-empty-state-example/demo-empty-state-example.component';
import { DemoErrorBannerComponent } from './demo-error-banner/demo-error-banner.component';
import { DemoExpandableFabComponent } from './demo-expandable-fab/demo-expandable-fab.component';
import { DemoFieldComponent } from './demo-field/demo-field.component';
import { DemoFooterComponent } from './demo-footer/demo-footer.component';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { DemoHubCardComponent } from './demo-hub-card/demo-hub-card.component';
import { DemoInfoBannerComponent } from './demo-info-banner/demo-info-banner.component';
import { DemoListContentComponent } from './demo-list-content/demo-list-content.component';
import { DemoLoadingContainerComponent } from './demo-loading-container/demo-loading-container.component';
import { DemoNavListComponent } from './demo-nav-list/demo-nav-list.component';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { DemoRightDrawerComponent } from './demo-right-drawer/demo-right-drawer.component';
import { DemoSidenavComponent } from './demo-sidenav/demo-sidenav.component';
import { DemoTextComponent } from './demo-text/demo-text.component';
import { DemoAccessibilityComponent } from './demo-accessibility/demo-accessibility.component';
import { DemoIconComponent } from './demo-icon/demo-icon.component';
import { DemoSelectionListComponent } from './demo-selection-list/demo-selection-list.component';
import { DemoMarkdownComponent } from './demo-markdown/demo-markdown.component';
import { DemoContributionComponent } from './demo-contribution/demo-contribution.component';

import { MatExpansionModule } from '@angular/material';
import { MatTabsModule, MatButtonModule } from '@angular/material';
import { MatRadioModule} from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';

import { RouterModule } from '@angular/router';

import { DateRangeModule } from '../../../src/date-range/date-range.module';
import {IgniteDesignSystemModule} from '../../../src';

const materialModules = [
    MarkdownModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTabsModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatListModule,
];

@NgModule({

  imports: [
    ...materialModules,
    FormsModule,
    CommonModule,
    IgniteDesignSystemModule,
    DateRangeModule,
    RouterModule,
  ],
  declarations: [
    DemoDialogComponent,
    DemoDialogComponentDialog,
    DemoDialogComponentDialogBackground,
    DemoDialogAcceptCancelComponent,
    DemoRadioButtonComponent,
    DemoCheckboxComponent,
    DemoCardComponent,
    DemoCenterComponent,
    DemoDateRangeComponent,
    DemoDividerComponent,
    DemoEmptyStateComponent,
    DemoEmptyStateExampleComponent,
    DemoErrorBannerComponent,
    DemoExpandableFabComponent,
    DemoFieldComponent,
    DemoFooterComponent,
    DemoFormComponent,
    DemoHubCardComponent,
    DemoInfoBannerComponent,
    DemoListContentComponent,
    DemoLoadingContainerComponent,
    DemoNavListComponent,
    DemoPageComponent,
    DemoRightDrawerComponent,
    DemoSidenavComponent,
    DemoTextComponent,
    DemoAccessibilityComponent,
    DemoIconComponent,
    DemoSelectionListComponent,
    DemoMarkdownComponent,
    DemoContributionComponent,
  ],
  exports: [
      ...materialModules, RouterModule,
  ],
    entryComponents: [DemoDialogComponent,
        DemoDialogComponentDialog,
        DemoDialogComponentDialogBackground,
        DemoDialogAcceptCancelComponent,
        DemoEmptyStateExampleComponent,]

})
export class DemoModule {}