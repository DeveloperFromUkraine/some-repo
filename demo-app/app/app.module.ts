import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule, MatToolbarModule, MatCardModule, MatProgressBarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

//Apollo
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getOperationAST } from 'graphql';
import { WebSocketLink } from 'apollo-link-ws';
import { ApolloLink } from 'apollo-link';

import { IgniteDesignSystemModule } from '../../src';
import { TestingModule } from './testing/testing.module';
import { CommonComponentModule } from './common/common-component.module';
import { AccessibilityModule } from './accessibility/accessibility.module';

import { AppComponent } from './app.component';
import { DemoModule } from './demo/demo.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { MarkdownModule } from './markdown/markdown.module';


import { MatCheckboxModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/';
import { MatIconModule } from '@angular/material/';
import { MatButtonModule } from '@angular/material';

import { SlackBotDialogComponent } from './slack-bot/slack-bot-dialog.component';
import { SlackService } from './services/slack-service';

import { PendoService } from './pendo/pendo.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { DemoDialogAcceptCancelComponent } from './demo/demo-dialog/demo-dialog-accept-cancel.component';
 import {DemoButtonGroupComponent} from './demo/demo-button-group/demo-button-group.component'; 
 import {DemoButtonsComponent} from './demo/demo-buttons/demo-buttons.component'; 
 import {DemoCardComponent} from './demo/demo-card/demo-card.component'; 
 import {DemoCenterComponent} from './demo/demo-center/demo-center.component'; 
 import {DemoCheckboxComponent} from './demo/demo-checkbox/demo-checkbox.component'; 
 import {DemoContributionComponent} from './demo/demo-contribution/demo-contribution.component'; 
 import {DemoDataTableContainerComponent} from './demo/demo-data-table-container/demo-data-table-container.component'; 
 import {DemoDatePickersComponent} from './demo/demo-date-pickers/demo-date-pickers.component'; 
 import {DemoDateRangeComponent} from './demo/demo-date-range/demo-date-range.component'; 
 import {DemoDialogComponent} from './demo/demo-dialog/demo-dialog.component'; 
 import {DemoDividerComponent} from './demo/demo-divider/demo-divider.component'; 
 import {DemoEmptyStateComponent} from './demo/demo-empty-state/demo-empty-state.component'; 
 import {DemoErrorBannerComponent} from './demo/demo-error-banner/demo-error-banner.component'; 
 import {DemoExpandableFabComponent} from './demo/demo-expandable-fab/demo-expandable-fab.component'; 
 import {DemoExpandableSearchComponent} from './demo/demo-expandable-search/demo-expandable-search.component'; 
 import {DemoFieldComponent} from './demo/demo-field/demo-field.component'; 
 import {DemoFooterComponent} from './demo/demo-footer/demo-footer.component'; 
 import {DemoFormComponent} from './demo/demo-form/demo-form.component'; 
 import {DemoHubCardComponent} from './demo/demo-hub-card/demo-hub-card.component'; 
 import {DemoIconComponent} from './demo/demo-icon/demo-icon.component'; 
 import {DemoInfoBannerComponent} from './demo/demo-info-banner/demo-info-banner.component'; 
 import {DemoListContentComponent} from './demo/demo-list-content/demo-list-content.component'; 
 import {DemoLoadingContainerComponent} from './demo/demo-loading-container/demo-loading-container.component'; 
 import {DemoNavListComponent} from './demo/demo-nav-list/demo-nav-list.component'; 
 import {DemoPageComponent} from './demo/demo-page/demo-page.component'; 
 import {DemoRadioButtonComponent} from './demo/demo-radio-button/demo-radio-button.component'; 
 import {DemoRightAlignContainerComponent} from './demo/demo-right-align-container/demo-right-align-container.component'; 
 import {DemoRightDrawerComponent} from './demo/demo-right-drawer/demo-right-drawer.component'; 
 import {DemoSelectInputsComponent} from './demo/demo-select-inputs/demo-select-inputs.component'; 
 import {DemoSelectionListComponent} from './demo/demo-selection-list/demo-selection-list.component'; 
 import {DemoSidenavComponent} from './demo/demo-sidenav/demo-sidenav.component'; 
 import {DemoSnackbarsAndToastsComponent} from './demo/demo-snackbars-and-toasts/demo-snackbars-and-toasts.component'; 
 import {DemoSwitchesComponent} from './demo/demo-switches/demo-switches.component'; 
 import {DemoTextComponent} from './demo/demo-text/demo-text.component'; 
 import {DemoTextFieldsComponent} from './demo/demo-text-fields/demo-text-fields.component'; 


const routes: Routes = [
    { path: '', component: WelcomeComponent },
     { path: 'button-group', component: DemoButtonGroupComponent }, 
     { path: 'buttons', component: DemoButtonsComponent }, 
     { path: 'card', component: DemoCardComponent }, 
     { path: 'center', component: DemoCenterComponent }, 
     { path: 'checkbox', component: DemoCheckboxComponent }, 
     { path: 'contribution', component: DemoContributionComponent }, 
     { path: 'data-table-container', component: DemoDataTableContainerComponent }, 
     { path: 'date-pickers', component: DemoDatePickersComponent }, 
     { path: 'date-range', component: DemoDateRangeComponent }, 
     { path: 'dialog', component: DemoDialogComponent }, 
     { path: 'divider', component: DemoDividerComponent }, 
     { path: 'empty-state', component: DemoEmptyStateComponent }, 
     { path: 'error-banner', component: DemoErrorBannerComponent }, 
     { path: 'expandable-fab', component: DemoExpandableFabComponent }, 
     { path: 'expandable-search', component: DemoExpandableSearchComponent }, 
     { path: 'field', component: DemoFieldComponent }, 
     { path: 'footer', component: DemoFooterComponent }, 
     { path: 'form', component: DemoFormComponent }, 
     { path: 'hub-card', component: DemoHubCardComponent }, 
     { path: 'icon', component: DemoIconComponent }, 
     { path: 'info-banner', component: DemoInfoBannerComponent }, 
     { path: 'list-content', component: DemoListContentComponent }, 
     { path: 'loading-container', component: DemoLoadingContainerComponent }, 
     { path: 'nav-list', component: DemoNavListComponent }, 
     { path: 'page', component: DemoPageComponent }, 
     { path: 'radio-button', component: DemoRadioButtonComponent }, 
     { path: 'right-align-container', component: DemoRightAlignContainerComponent }, 
     { path: 'right-drawer', component: DemoRightDrawerComponent }, 
     { path: 'select-inputs', component: DemoSelectInputsComponent }, 
     { path: 'selection-list', component: DemoSelectionListComponent }, 
     { path: 'sidenav', component: DemoSidenavComponent }, 
     { path: 'snackbars-and-toasts', component: DemoSnackbarsAndToastsComponent }, 
     { path: 'switches', component: DemoSwitchesComponent }, 
     { path: 'text', component: DemoTextComponent }, 
     { path: 'text-fields', component: DemoTextFieldsComponent }, 
    
];

@NgModule({
    declarations: [
        AppComponent,
        SlackBotDialogComponent,
        WelcomeComponent
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
        AccessibilityModule
    ],
    providers: [SlackService, PendoService, CookieService],
    bootstrap: [AppComponent],
    exports: [MatIconModule, MatButtonModule], 
    entryComponents: [SlackBotDialogComponent],
})

export class AppModule {

    constructor(apollo: Apollo, httpLink: HttpLink) {
        const uri = 'https://bakery-server.apps.mia.ulti.io/graphql';
        const http = httpLink.create({ uri });

        const ws = new WebSocketLink({
            uri: 'wss://bbql.apps.mia.ulti.io/subscriptions',
            options: {
                reconnect: true
            }
        });

        apollo.create({
            link: ApolloLink.split(
                operation => {
                    const operationAST = getOperationAST(operation.query, operation.operationName);
                    return !!operationAST && operationAST.operation === 'subscription';
                },
                ws,
                http,
            ),
            cache: new InMemoryCache()
        });
    }
}