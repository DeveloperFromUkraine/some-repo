import { Component } from '@angular/core';

@Component({
  selector: 'ign-list-item-primary-text',
  template: `<h3 mat-line class="primary-text"><ng-content></ng-content></h3>`,
  styles: [
    `
    .primary-text {
      margin-bottom: 4px;
      color: #000;
      opacity: 0.87;
      font-size: 16px;
    }
    `,
  ],
})
export class ListItemPrimaryTextComponent {}

@Component({
  selector: 'ign-list-item-secondary-text',
  template: `<h4 mat-line class="secondary-text"><ng-content></ng-content></h4>`,
  styles: [
    `
    .secondary-text {
      color: #000;
      opacity: 0.54;
      font-size: 14px;
    }
    `,
  ],
})
export class ListItemSecondaryTextComponent {}
