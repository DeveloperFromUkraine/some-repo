import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatIconModule, MatListModule } from '@angular/material';

import { ExpandableFabComponent } from './expandable-fab.component';
import { TranslationModule } from '../../localization/translation.module';
import { ExpandableFabItemModule } from '../expandable-fab-item/expandable-fab-item.module';

@NgModule({
    imports: [
        CommonModule,
        TranslationModule,
        ExpandableFabItemModule,
        MatListModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [
        ExpandableFabComponent
    ],
    declarations: [
        ExpandableFabComponent
    ]
})
export class ExpandableFabModule {

}
