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
<% for(var i = 0; i < imports.length; i ++) { %> <%- imports[i]%> 
<% } %>

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    <% for(var i = 0; i < routes.length; i ++) { %> <%- routes[i]%> 
    <% } %>
];

@NgModule({
    declarations: [
        AppComponent,
        SlackBotDialogComponent,
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