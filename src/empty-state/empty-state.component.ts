/* tslint:disable:max-classes-per-file */
import { Component } from '@angular/core';

@Component({
  selector: 'ign-empty-state, ign-empty-state',
  templateUrl: './empty-state.html',
  styleUrls: ['./empty-state.scss'],
})
export class EmptyStateComponent {}

@Component({
  selector: 'ign-empty-state-title, ign-empty-state-title',
  template: '<ng-content></ng-content>',
  styles: [
    `
    :host {
      text-align: center;
      display: block;
      color: #000000;
      font-size: 20px;
      margin-bottom: 32px;
      position: relative;
    }
  `,
  ],
})
export class EmptyStateTitleComponent {}

@Component({
  selector: 'ign-empty-state-description, ign-empty-state-description',
  template: '<div><ng-content></ng-content></div>',
  styles: [
    `
    :host {
      text-align: left;
      display: block;
      opacity: 0.54;
      color: #000000;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 16px;
    }
  `,
  ],
})
export class EmptyStateDescriptionComponent {}

@Component({
  selector: 'ign-empty-state-image, ign-empty-state-image',
  template: `
    <img class='image' width="640px" src='/assets/images/empty-state.svg'/>'
  `,
  styles: [
    `
    :host {
      position: absolute;
      z-index: 0;
      bottom: 0px;
      right: 0px;
    }
  `,
  ],
})
export class EmptyStateImageComponent {}
