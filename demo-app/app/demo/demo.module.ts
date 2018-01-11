import { NgModule } from '@angular/core';

import { MarkdownModule } from '../markdown/markdown.module';

import { DemoDialogComponent } from './demo-dialog/demo-dialog.component';
import { DemoRadioButtonComponent } from './demo-radio-button/demo-radio-button.component';
import { DemoCheckboxComponent } from './demo-checkbox/demo-checkbox.component';

@NgModule({
  imports: [
    MarkdownModule,
  ],
  declarations: [
    DemoDialogComponent,
    DemoRadioButtonComponent,
    DemoCheckboxComponent,
  ],
  exports: [],
})
export class DemoModule {}
