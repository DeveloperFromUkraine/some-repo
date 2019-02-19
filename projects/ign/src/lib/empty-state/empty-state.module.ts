import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    EmptyStateComponent,
    EmptyStateDescriptionComponent,
    EmptyStateImageComponent,
    EmptyStateTitleComponent
} from './empty-state.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        EmptyStateComponent,
        EmptyStateTitleComponent,
        EmptyStateDescriptionComponent,
        EmptyStateImageComponent
    ],
    declarations: [
        EmptyStateComponent,
        EmptyStateTitleComponent,
        EmptyStateDescriptionComponent,
        EmptyStateImageComponent
    ]
})
export class EmptyStateModule {

}
