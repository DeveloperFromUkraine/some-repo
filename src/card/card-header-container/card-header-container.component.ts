import { Component } from '@angular/core';

@Component({
  selector: 'ign-card-header-container',
  template: `<div class="card-header-container"><ng-content></ng-content></div>`,
  styles: [
    `
      .card-header-container {
        margin-bottom: 32px;
      }

    `,
  ],
})
export class CardHeaderContainerComponent {}
