import { NgModule } from '@angular/core';
import { MatListModule, MatButtonModule } from '@angular/material';
import { ExpandableFabItemComponent } from './expandable-fab-item.component';
import { MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        MatListModule,
        MatIconModule,
        CommonModule,
        RouterModule,
        MatButtonModule,
    ],
    declarations: [
        ExpandableFabItemComponent
    ],
    exports: [
        ExpandableFabItemComponent
    ]
})
export class ExpandableFabItemModule {}