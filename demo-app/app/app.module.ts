import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { IgniteDesignSystemModule } from '../../src';

import { AppComponent } from './app.component';
import { MarkdownComponent } from './markdown/markdown.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MarkdownComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    IgniteDesignSystemModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
