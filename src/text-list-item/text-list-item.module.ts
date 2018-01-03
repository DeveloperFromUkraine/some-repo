import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material';
import { TextListItemComponent } from './text-list-item.component';

@NgModule({
    imports: [
        MatListModule
    ],
    declarations: [
        TextListItemComponent
    ],
    exports: [
        TextListItemComponent
    ]
})
export class TextListItemModule {}
