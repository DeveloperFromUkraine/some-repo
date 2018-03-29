import { NgModule } from '@angular/core';

import { MarkdownModule } from '../markdown/markdown.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { CdkTableModule } from '@angular/cdk/table';

import { DemoDialogComponentDialog, DemoDialogComponentDialogBackground } from './demo-dialog/demo-dialog.component';
import { DemoDialogAcceptCancelComponent } from './demo-dialog/demo-dialog-accept-cancel.component';
<% for(var i = 0; i < imports.length; i ++) { %> <%- imports[i]%> 
<% } %>

import { MatExpansionModule } from '@angular/material';
import { MatTabsModule, MatButtonModule } from '@angular/material';
import { MatRadioModule} from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';

import { RouterModule } from '@angular/router';

import { DateRangeModule } from '../../../src/date-range/date-range.module';
import { IgniteDesignSystemModule } from '../../../src';

const materialModules = [
    MarkdownModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTabsModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatListModule,
    MatTableModule,
];

@NgModule({

  imports: [
    ...materialModules,
    FormsModule,
    CommonModule,
    IgniteDesignSystemModule,
    DateRangeModule,
    RouterModule,
    HttpModule,
    HttpClientModule,
    CdkTableModule,
  ],
  declarations: [
      DemoContributionComponent,
      DemoDialogComponentDialog,
      DemoDialogComponentDialogBackground,
      DemoDialogAcceptCancelComponent,
    <% for(var i = 0; i < demoList.length; i ++) { %> <%- demoList[i]%> 
    <% } %>
  ],
  exports: [
      ...materialModules, RouterModule, MatTableModule
  ],
    entryComponents: [
        DemoDialogComponentDialog,
        DemoDialogComponentDialogBackground,
        DemoDialogAcceptCancelComponent,
        <% for(var i = 0; i < demoList.length; i ++) { %> <%- demoList[i]%> 
        <% } %>
    ]

})
export class DemoModule {}