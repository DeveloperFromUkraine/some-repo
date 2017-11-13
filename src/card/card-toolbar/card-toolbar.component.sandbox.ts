import { sandboxOf } from 'angular-playground';
import { SharedChildModule } from 'app/modules/shared.module';
import { CardToolbarComponent } from './card-toolbar.component';
import { MatButtonModule } from '@angular/material';

export default sandboxOf(CardToolbarComponent, {
  imports: [SharedChildModule, MatButtonModule],
}).add('standalone', {
  template: `
  <ign-card-toolbar>
    <ign-card-title>meow</ign-card-title>
    <button mat-button [routerLink]="['/']">
      meow button
    </button>
    <button
      mat-icon-button
    >
      <mat-icon
        class="mat-24"
      >
        more_vert
      </mat-icon>
    </button>
  </ign-card-toolbar>
  `,
});
