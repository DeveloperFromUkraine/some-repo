import { sandboxOf } from 'angular-playground';
import { SharedChildModule } from 'app/modules/shared.module';
import {
  EmptyStateComponent,
  EmptyStateTitleComponent,
  EmptyStateDescriptionComponent,
  EmptyStateImageComponent,
} from './empty-state.component';
import { MatButtonModule } from '@angular/material';

export default sandboxOf(EmptyStateComponent, {
  imports: [SharedChildModule, MatButtonModule],
}).add('standalone', {
  template: `
  <ign-empty-state>
    <ign-empty-state-title>
      No [object name] yet</ign-empty-state-title>
    <ign-empty-state-description>
      My object's description
    </ign-empty-state-description>
    <ign-button-group>
      <button mat-button color="accent" type="button">
        Add
      </button>
      <button mat-button color="accent" type="button">
        Import
      </button>
    </ign-button-group>
  </ign-empty-state>
  `,
});
