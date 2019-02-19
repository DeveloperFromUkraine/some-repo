import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesComponent } from './messages.component';
import { ErrorBannerModule } from '../error-banner/error-banner.module';

@NgModule({
    imports: [
        CommonModule,
        ErrorBannerModule
    ],
    exports: [
        MessagesComponent
    ],
    declarations: [
        MessagesComponent
    ]
})

export class MessagesModule { }
