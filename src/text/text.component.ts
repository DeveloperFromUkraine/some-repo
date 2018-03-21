import { Component } from '@angular/core';

@Component({
  selector: 'ign-list-item-primary-text',
  template: `<h3 mat-line class="primary-text"><ng-content></ng-content></h3>`,
  styleUrls: [`./text.scss`]
})
export class ListItemPrimaryTextComponent {}

@Component({
  selector: 'ign-list-item-secondary-text',
  template: `<h4 mat-line class="secondary-text"><ng-content></ng-content></h4>`,
  styleUrls: [`./text.scss`]
})
export class ListItemSecondaryTextComponent {}
