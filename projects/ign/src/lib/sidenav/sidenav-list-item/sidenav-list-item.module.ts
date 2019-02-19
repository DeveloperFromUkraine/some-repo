import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material';

import { SideNavListItemComponent } from './sidenav-list-item.component';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule
    ],
    exports: [
        SideNavListItemComponent
    ],
    declarations: [
        SideNavListItemComponent
    ]
})
export class SidenavListItemModule {

}
