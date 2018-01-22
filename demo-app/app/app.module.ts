import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { IgniteDesignSystemModule } from '../../src';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DemoModule } from './demo/demo.module';
import { MarkdownModule } from './markdown/markdown.module';
import { MatSidenavModule, MatToolbarModule, MatCardModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

import { MatCheckboxModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/';
import { MatIconModule } from '@angular/material/';
import { MatButtonModule } from '@angular/material';

import { DemoDialogComponent } from './demo/demo-dialog/demo-dialog.component';
import { DemoRadioButtonComponent } from './demo/demo-radio-button/demo-radio-button.component';
import { DemoCheckboxComponent } from './demo/demo-checkbox/demo-checkbox.component';
import { DemoCardComponent } from './demo/demo-card/demo-card.component';
import { DemoCenterComponent } from './demo/demo-center/demo-center.component';
import { DemoDateRangeComponent } from './demo/demo-date-range/demo-date-range.component';
import { DemoDividerComponent } from './demo/demo-divider/demo-divider.component';
import { DemoEmptyStateComponent } from './demo/demo-empty-state/demo-empty-state.component';
import { DemoEmptyStateExampleComponent } from './demo/demo-empty-state/demo-empty-state-example/demo-empty-state-example.component';
import { DemoErrorBannerComponent } from './demo/demo-error-banner/demo-error-banner.component';
import { DemoExpandableFabComponent } from './demo/demo-expandable-fab/demo-expandable-fab.component';
import { DemoFieldComponent } from './demo/demo-field/demo-field.component';
import { DemoFooterComponent } from './demo/demo-footer/demo-footer.component';
import { DemoFormComponent } from './demo/demo-form/demo-form.component';
import { DemoHubCardComponent } from './demo/demo-hub-card/demo-hub-card.component';
import { DemoInfoBannerComponent } from './demo/demo-info-banner/demo-info-banner.component';
import { DemoListContentComponent } from './demo/demo-list-content/demo-list-content.component';
import { DemoLoadingContainerComponent } from './demo/demo-loading-container/demo-loading-container.component';
import { DemoNavListComponent } from './demo/demo-nav-list/demo-nav-list.component';
import { DemoPageComponent } from './demo/demo-page/demo-page.component';
import { DemoRightDrawerComponent } from './demo/demo-right-drawer/demo-right-drawer.component';
import { DemoSelectContainerComponent } from './demo/demo-select-container/demo-select-container.component';
import { DemoSidenavComponent } from './demo/demo-sidenav/demo-sidenav.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'dialog', component: DemoDialogComponent },
  { path: 'radio-button', component: DemoRadioButtonComponent },
  { path: 'checkbox', component: DemoCheckboxComponent },
  { path: 'card', component: DemoCardComponent },
  { path: 'center', component: DemoCenterComponent },
  { path: 'date-range', component: DemoDateRangeComponent },
  { path: 'divider', component: DemoDividerComponent },
  { path: 'empty-state', component: DemoEmptyStateComponent },
  { path: 'empty-state/empty-state-example', component: DemoEmptyStateExampleComponent },
  { path: 'error-banner', component: DemoErrorBannerComponent },
  { path: 'expandable-fab', component: DemoExpandableFabComponent },
  { path: 'field', component: DemoFieldComponent },
  { path: 'footer', component: DemoFooterComponent },
  { path: 'form', component: DemoFormComponent },
  { path: 'hub-card', component: DemoHubCardComponent },
  { path: 'info-banner', component: DemoInfoBannerComponent },
  { path: 'list-content', component: DemoListContentComponent },
  { path: 'loading-container', component: DemoLoadingContainerComponent },
  { path: 'nav-list', component: DemoNavListComponent },
  { path: 'page', component: DemoPageComponent },
  { path: 'right-drawer', component: DemoRightDrawerComponent },
  { path: 'select-container', component: DemoSelectContainerComponent },
  { path: 'sidenav', component: DemoSidenavComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,

    IgniteDesignSystemModule,

    MarkdownModule,
    DemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatIconModule, MatButtonModule]
})

export class AppModule {

}
