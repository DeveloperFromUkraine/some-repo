import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { 
    AaaComponent,
    AsynchronousComponent,
    ConfiguringJestComponent,
    EventHandlersComponent,
    ResourcesComponent,
    SnapshotComponent,
    TestTypesComponent,
    StatusComponent
} from './components/testing';

const routes: Routes = [
    { path: 'aaa', component: AaaComponent },
    { path: 'asynchronous', component: AsynchronousComponent },
    { path: 'jest', component: ConfiguringJestComponent },
    { path: 'event-handler', component: EventHandlersComponent },
    { path: 'snapshot', component: SnapshotComponent },
    { path: 'test-types', component: TestTypesComponent },
    { path: 'resources', component: ResourcesComponent },
    { path: 'status', component: StatusComponent }
];

import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { MatCardModule, MatIconModule, MatToolbarModule, MatMenuModule, MatButtonModule } from "@angular/material";

@NgModule({
    declarations: [
        AaaComponent,
        AsynchronousComponent,
        ConfiguringJestComponent,
        EventHandlersComponent,
        ResourcesComponent,
        SnapshotComponent,
        TestTypesComponent,
        StatusComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        HttpClientModule,
        ApolloModule,
        HttpLinkModule,
        BrowserModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule
    ],
    providers: [],
})
export class TestingModule {
    constructor(apollo: Apollo, httpLink: HttpLink) {
        apollo.create({
            link: httpLink.create({uri: 'http://bakery-server.apps.mia.ulti.io/graphql'}),
            cache: new InMemoryCache()
        });
    }
}