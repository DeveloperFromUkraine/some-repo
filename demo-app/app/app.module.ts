import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//Apollo
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { IgniteDesignSystemModule } from '../../src';
import { TestingModule } from './testing/testing.module';
import { CommonComponentModule } from './common/common-component.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DemoModule } from './demo/demo.module';
import { MarkdownModule } from './markdown/markdown.module';
import { MatSidenavModule, MatToolbarModule, MatCardModule, MatProgressBarModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

import { MatCheckboxModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/';
import { MatIconModule } from '@angular/material/';
import { MatButtonModule } from '@angular/material';
import { SlackBotDialogComponent } from './slack-bot/slack-bot-dialog.component';
import { SlackService } from './services/slack-service';

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
import { DemoSidenavComponent } from './demo/demo-sidenav/demo-sidenav.component';
import { DemoTextComponent } from './demo/demo-text/demo-text.component';
import { DemoAccessibilityDirective } from './demo/demo-accessibility/demo-accessibility.directive';
import { DemoAccessibilityComponent } from './demo/demo-accessibility/demo-accessibility.component';
import { DemoIconComponent } from './demo/demo-icon/demo-icon.component';
import { DemoSelectionListComponent } from './demo/demo-selection-list/demo-selection-list.component';
import { DemoMarkdownComponent } from './demo/demo-markdown/demo-markdown.component';
import { DemoContributionComponent } from './demo/demo-contribution/demo-contribution.component';
import { DemoButtonGroupComponent } from './demo/demo-button-group/demo-button-group.component';
import { DemoDataTableContainerComponent } from './demo/demo-data-table-container/demo-data-table-container.component';
import { DemoExpandableSearchComponent } from './demo/demo-expandable-search/demo-expandable-search.component';
import { DemoRightAlignContainerComponent } from './demo/demo-right-align-container/demo-right-align-container.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'dialog', component: DemoDialogComponent },
    { path: 'radio-button', component: DemoRadioButtonComponent },
    { path: 'checkbox', component: DemoCheckboxComponent },
    { path: 'card', component: DemoCardComponent },
    { path: 'center', component: DemoCenterComponent },
    { path: 'data-table-container', component: DemoDataTableContainerComponent },
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
    { path: 'sidenav', component: DemoSidenavComponent },
    { path: 'text', component: DemoTextComponent },
    { path: 'accessibility', component: DemoAccessibilityDirective },
    { path: 'accessibility-component', component: DemoAccessibilityComponent },
    { path: 'icon', component: DemoIconComponent },
    { path: 'selection-list', component: DemoSelectionListComponent },
    { path: 'markdown', component: DemoMarkdownComponent },
    { path: 'contribution', component: DemoContributionComponent },
    { path: 'button-group', component: DemoButtonGroupComponent },
    { path: 'expandable-search', component: DemoExpandableSearchComponent },
    { path: 'right-align-container', component: DemoRightAlignContainerComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        SlackBotDialogComponent,
        WelcomeComponent,
        DemoAccessibilityDirective,
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
        MatProgressBarModule,
        MatCheckboxModule,
        MatRadioModule,
        MatIconModule,
        ApolloModule,
        HttpLinkModule,
        IgniteDesignSystemModule,
        TestingModule,
        CommonComponentModule,
        MarkdownModule,
        DemoModule,
        HttpClientModule,
    ],
    providers: [SlackService],
    bootstrap: [AppComponent],
    exports: [MatIconModule, MatButtonModule],
    entryComponents: [SlackBotDialogComponent],
})

export class AppModule {

    constructor(apollo: Apollo, httpLink: HttpLink) {
        apollo.createDefault({
            link: httpLink.create({ uri: 'http://bakery-server.apps.mia.ulti.io/graphql' }),
            cache: new InMemoryCache()
        });

        apollo.createNamed(
            'subscription',
            {
                link: httpLink.create({ uri: 'https://bbql.apps.mia.ulti.io/graphql' }),
                cache: new InMemoryCache()
            });
    }
}