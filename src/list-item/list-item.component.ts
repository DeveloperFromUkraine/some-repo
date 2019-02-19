import { Component } from '@angular/core';

@Component({
  selector: 'ign-list-item',
  template: '<ng-content></ng-content>',
  styles: [
    `
      :host {
        display: flex;
        flex: 1;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      }
    `,
  ],
})
export class ListItemComponent {}

@Component({
  selector: 'ign-list-item-content',
  template: `
    <ng-content></ng-content>
  `,
  styles: [
    `
      :host {
        margin: 4px;
        display: block;
        width: 100%;
      }
    `,
  ],
})
export class ListItemContentComponent {}

@Component({
  selector: 'ign-list-container',
  template: `
    <ng-content></ng-content>
  `,
  styles: [
    `
      :host /deep/ ign-list-item:not(:last-child) {
        padding-bottom: 16px;
        /*border-bottom: 1px solid rgba(0, 0, 0, 0.12);*/
      }
    `,
  ],
})
export class ListContainerComponent {}
