import { NgModule } from '@angular/core';

import { TranslationModule } from '../localization/translation.module';
import { PersistentSearchComponent } from './persistent-search.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatIconModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        TranslationModule,
        MatIconModule,
        MatFormFieldModule
    ],
    exports: [
        PersistentSearchComponent,
    ],
    declarations: [
        PersistentSearchComponent,
    ]
})
export class PersistentSearchModule {

}
