import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { 
    AaaComponent,
    AsynchronousComponent,
    ConfiguringJestComponent,
    EventHandlersComponent,
    ResourcesComponent,
    SnapshotComponent,
    TestTypesComponent,
    StatusComponent
} from './testing';

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
        RouterModule.forChild(routes)
    ],
    providers: [],
})
export class TestingModule {

}