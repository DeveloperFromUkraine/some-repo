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

import { MatCheckboxModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/';
import { MatIconModule } from '@angular/material/';
import { MatButtonModule } from '@angular/material';

import { DemoDialogComponent } from './demo/demo-dialog/demo-dialog.component';
import { DemoRadioButtonComponent } from './demo/demo-radio-button/demo-radio-button.component';
import { DemoCheckboxComponent } from './demo/demo-checkbox/demo-checkbox.component';
import { DemoCardComponent } from './demo/demo-card/demo-card.component';
import { DemoCenterComponent } from './demo/demo-center/demo-center.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'dialog', component: DemoDialogComponent },
  { path: 'radio-button', component: DemoRadioButtonComponent },
  { path: 'checkbox', component: DemoCheckboxComponent },
  { path: 'card', component: DemoCardComponent },
  { path: 'center', component: DemoCenterComponent },
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
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,

    IgniteDesignSystemModule,

    MarkdownModule,
    DemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatIconModule, MatButtonModule]
})

export class AppModule {

}
