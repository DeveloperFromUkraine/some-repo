import { NgModule } from '@angular/core';
import { SizingFullDirective, SizingLargeDirective, SizingMediumDirective, SizingSmallDirective } from './form-sizing.component';

@NgModule({
    imports: [],
    exports: [
        // SizingSmallDirective,
        // SizingMediumDirective,
        // SizingLargeDirective,
        // SizingFullDirective
    ],
    declarations: [
        SizingSmallDirective,
        SizingMediumDirective,
        SizingLargeDirective,
        SizingFullDirective
    ]
})
export class FormSizingModule {

}
