import { NgModule } from '@angular/core';
import { TranslationPipe } from './translation.pipe';
import { TranslationDirective } from './translation.directive';

@NgModule({
    imports: [
    ],
    declarations: [
        TranslationPipe,
        TranslationDirective
    ],
    exports: [
        TranslationPipe,
        TranslationDirective
    ]
})
export class TranslationModule {}
