import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { IgniteDesignSystemModule } from '../../src';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DemoModule } from './demo/demo.module';
import { MarkdownModule } from './markdown/markdown.module';
import { MatSidenavModule, MatToolbarModule, MatCardModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

import { DemoDialogComponent } from './demo/demo-dialog/demo-dialog.component';
import { DemoRadioButtonComponent } from './demo/demo-radio-button/demo-radio-button.component';
import { DemoCheckboxComponent } from './demo/demo-checkbox/demo-checkbox.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'dialog', component: DemoDialogComponent },
  { path: 'radio-button', component: DemoRadioButtonComponent },
  { path: 'checkbox', component: DemoCheckboxComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {
      useHash: true
    }),

    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,

    IgniteDesignSystemModule,

    MarkdownModule,
    DemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
