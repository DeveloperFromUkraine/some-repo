import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

import { ListSelectionAddButtonComponent } from './list-selection-add-button.component';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule
    ],
    exports: [
        ListSelectionAddButtonComponent
    ],
    declarations: [
        ListSelectionAddButtonComponent
    ]
})
export class ListSelectionAddButtonModule {

}
