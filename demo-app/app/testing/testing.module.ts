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

import { BrowserModule } from "@angular/platform-browser";
import { 
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    MatTabsModule
} from "@angular/material";

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
        BrowserModule,
        MatCardModule,
        MatToolbarModule,
        MatExpansionModule,
        MatTabsModule
    ],
    providers: []
})
export class TestingModule {
}