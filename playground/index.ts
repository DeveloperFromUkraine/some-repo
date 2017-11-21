/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { IgniteDesignSystemModule }  from 'ignite-design-system';

@Component({
  selector: 'app',
  template: `<h1>Hello, world!</h1>`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, IgniteDesignSystemModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
