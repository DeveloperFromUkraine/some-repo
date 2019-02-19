import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorBannerComponent } from './error-banner.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        ErrorBannerComponent
    ],
    declarations: [
        ErrorBannerComponent
    ]
})

export class ErrorBannerModule {
}
