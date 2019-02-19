import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule, MatSidenavModule } from '@angular/material';

import { RightDrawerComponent } from './right-drawer.component';
import { TranslationModule } from '../localization/translation.module';

@NgModule({
    imports: [
        CommonModule,
        TranslationModule,
        MatIconModule,
        MatSidenavModule
    ],
    exports: [
        RightDrawerComponent
    ],
    declarations: [
        RightDrawerComponent
    ]
})
export class RightDrawerModule {

}
