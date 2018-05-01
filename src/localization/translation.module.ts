import { NgModule } from '@angular/core';
import { TranslationPipe } from './translation.pipe';

@NgModule({
    imports: [
    ],
    declarations: [
        TranslationPipe,
    ],
    exports: [
        TranslationPipe,
    ]
})
export class TranslationModule {}
