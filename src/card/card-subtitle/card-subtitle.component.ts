import { Component } from '@angular/core';

@Component({
  selector: 'ign-card-subtitle',
  template: `
    <h4 class="card-subtitle"><ng-content></ng-content></h4>
  `,
  styles: [
    `
      .card-subtitle {
        opacity: 0.75;
      }
    `,
  ],
})
export class CardSubtitleComponent {}
