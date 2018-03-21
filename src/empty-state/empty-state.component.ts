/* tslint:disable:max-classes-per-file */
import { Component } from '@angular/core';

@Component({
  selector: 'ign-empty-state',
  templateUrl: './empty-state.html',
  styleUrls: ['./empty-state.scss'],
})
export class EmptyStateComponent {}

@Component({
  selector: 'ign-empty-state-title',
  template: '<ng-content></ng-content>',
  styleUrls: [`empty-state-title.scss`],
})
export class EmptyStateTitleComponent {}

@Component({
  selector: 'ign-empty-state-description',
  template: '<div><ng-content></ng-content></div>',
  styleUrls: [`./empty-state-description.scss`],
})
export class EmptyStateDescriptionComponent {}

@Component({
  selector: 'ign-empty-state-image',
  template: `
    <img width="100%" src='/assets/images/empty-state.svg'/>'
  `,
  styles: [
    `
    :host {
      width: 33%;
      position: absolute;
      z-index: 0;
      bottom: 0px;
      right: 0px;
    }
  `,
  ],
})
export class EmptyStateImageComponent {}
