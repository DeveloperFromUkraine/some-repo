import { Component } from '@angular/core';

@Component({
  selector: 'ign-page',
  template: `
    <ng-content></ng-content>
  `,
  styles: [
    `
    :host {
      width: 100%;
      display: flex;
      padding-top: 16px;
      flex-direction: column;
      align-items: center;
      flex-grow: 1; // remove this to not take the whole viewport
    }
  `,
  ],
})
export class PageComponent {}
