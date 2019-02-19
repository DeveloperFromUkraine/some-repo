import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListContentComponent } from './list-content.component';
import { TranslationModule } from '../localization/translation.module';

@NgModule({
    imports: [
        CommonModule,
        TranslationModule
    ],
    exports: [
        ListContentComponent
    ],
    declarations: [
        ListContentComponent
    ]
})
export class ListContentModule {

}
