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

<% for(var i = 0; i < imports.length; i ++) { %> <%- imports[i]%> 
<% } %>

const routes: Routes = [
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
    ],
    providers: [SlackService],
    bootstrap: [AppComponent],
    exports: [MatIconModule, MatButtonModule], 
    entryComponents: [SlackBotDialogComponent],
})

export class AppModule {
    constructor(apollo: Apollo, httpLink: HttpLink) {
        apollo.create({
            link: httpLink.create({uri: 'http://bakery-server.apps.mia.ulti.io/graphql'}),
            cache: new InMemoryCache()
        });
    }
}