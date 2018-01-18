import { NgModule } from '@angular/core';

import { MarkdownModule } from '../markdown/markdown.module';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

import { DemoDialogComponent } from './demo-dialog/demo-dialog.component';
import { DemoDialogComponentDialog } from './demo-dialog/demo-dialog.component';
import { DemoRadioButtonComponent } from './demo-radio-button/demo-radio-button.component';
import { DemoCheckboxComponent } from './demo-checkbox/demo-checkbox.component';
import { DemoCardComponent } from './demo-card/demo-card.component';
import { DemoCenterComponent } from './demo-center/demo-center.component';

import { MatExpansionModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatRadioModule} from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

import {IgniteDesignSystemModule} from '../../../src';

@NgModule({
  imports: [
    MarkdownModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTabsModule,
    MatRadioModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    IgniteDesignSystemModule
  ],
  declarations: [
    DemoDialogComponent,
     DemoDialogComponentDialog,
    DemoRadioButtonComponent,
    DemoCheckboxComponent,
    DemoCardComponent,
    DemoCenterComponent,
  ],
  exports: [
      MatCheckboxModule,
      MatExpansionModule,
      MatTabsModule,
      MatRadioModule
  ],
    entryComponents: [DemoDialogComponent, DemoDialogComponentDialog],

})
export class DemoModule {}
