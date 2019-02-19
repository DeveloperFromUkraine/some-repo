import { NgModule } from '@angular/core';

import { CurrencyMaskComponent } from './currency-mask.component';
import { CurrencyMaskDirective } from './currency-mask.directive';
import { CommonModule } from '@angular/common';
import { InputMaskModule } from '../base-input-mask/input-mask.module';

@NgModule({
    imports: [
        CommonModule,
        InputMaskModule
    ],
    exports: [
        CurrencyMaskComponent,
        CurrencyMaskDirective
    ],
    declarations: [
        CurrencyMaskComponent,
        CurrencyMaskDirective
    ]
})
export class CurrencyMaskModule {

}
