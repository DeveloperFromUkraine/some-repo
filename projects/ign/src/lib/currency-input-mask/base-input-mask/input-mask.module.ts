import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMaskComponent } from './input-mask.component';
import { DisplayModeDirective } from './input-mask.directive';
import { MatFormFieldModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatFormFieldModule
    ],
    exports: [
        InputMaskComponent,
        DisplayModeDirective
    ],
    declarations: [
        InputMaskComponent,
        DisplayModeDirective
    ]
})
export class InputMaskModule {

}
