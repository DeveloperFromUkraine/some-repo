import { Component } from '@angular/core';

@Component({
  selector: 'ign-divider',
  template: `<div></div>`,
  styles: [
    `
    :host {
      display: block;
      border-top: 1px solid;
      border-top-color: rgba(0, 0, 0, .12);
      margin-bottom: 4px;
    }
    `,
  ],
})
export class DividerComponent {}
