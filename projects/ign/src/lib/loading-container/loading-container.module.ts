import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material';

import { LoadingContainerComponent } from './loading-container.component';
import { TranslationModule } from '../localization/translation.module';

@NgModule({
    imports: [
        CommonModule,
        TranslationModule,
        MatProgressSpinnerModule
    ],
    exports: [
        LoadingContainerComponent
    ],
    declarations: [
        LoadingContainerComponent
    ]
})
export class LoadingContainerModule {

}
