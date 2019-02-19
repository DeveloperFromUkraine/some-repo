import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material';

import { ListContentCardComponent } from './list-content-card.component';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule
    ],
    exports: [
        ListContentCardComponent
    ],
    declarations: [
        ListContentCardComponent
    ]
})
export class ListContentCardModule {

}
