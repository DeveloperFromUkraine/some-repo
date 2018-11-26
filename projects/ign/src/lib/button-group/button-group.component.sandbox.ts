import { sandboxOf } from 'angular-playground';
import { ButtonGroupComponent } from './button-group.component';
import { MatButtonModule } from '@angular/material';

export default sandboxOf(ButtonGroupComponent, {
  imports: [MatButtonModule],
}).add('Button group', {
  template: `
    <div style="width: 100%">
      <ign-button-group class="button-group">
            <button
                class="cancel-button"
                mat-raised-button
                mat-button
                type="submit">
                Cancel
            </button>
            <button
                class="save-button"
                mat-raised-button
                mat-button
                type="submit"
                color="accent">
                Save and Import
            </button>
        </ign-button-group>
    `,
});
