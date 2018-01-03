import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material';
import { NavListComponent } from './nav-list.component';

@NgModule({
    imports: [
        MatListModule
    ],
    declarations: [
        NavListComponent
    ],
    exports: [
        NavListComponent
    ]
})
export class NavListModule {}
