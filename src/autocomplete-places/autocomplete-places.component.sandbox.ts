import { sandboxOf } from 'angular-playground';
import { AutocompletePlacesComponent } from './autocomplete-places.component';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material';

import { imports, providers, declarations } from './autocomplete-places.module';
import { LoggingModule } from 'app/services/logging/logging.module';

const sandboxImports = [
  ...imports,
  FormsModule,
  ReactiveFormsModule,
  MatButtonModule,
  LoggingModule,
];

export default sandboxOf(AutocompletePlacesComponent, {
  imports: sandboxImports,
  providers,
  declarations,
})
  .add('standalone', {
    template: `
      <div>
        <nu-autocomplete-places #autocomplete></nu-autocomplete-places>
      </div>
      <h2>Result</h2>
      <pre>{{ autocomplete.result$ | async | json }}</pre>
      <h2>Suggestions</h2>
      <pre>{{ autocomplete.suggestions$ | async | json }}</pre>
    `,
  })
  .add('in a template-driven form', {
    styles: [`.full-width { width: 100%; }`],
    template: `
      <form>
        <div>
          <nu-autocomplete-places
            name="address"
            [(ngModel)]="model.address">
          </nu-autocomplete-places>
        </div>
        <div>
          <nu-autocomplete-places
            name="prefilledAddress"
            displayName="Prefilled Address"
            [(ngModel)]="model.prefilledAddress">
          </nu-autocomplete-places>
        </div>
        <div>
          <button mat-raised-button type="submit">Submit</button>
        </div>
        <hr />
        <pre>{{ model | json }}</pre>
      </form>
    `,
    context: {
      model: {
        address: null,
        prefilledAddress: {
          city: 'Weston',
          country: {
            code: 'USA',
          },
          line1: '2250 North Commerce Parkway',
          line2: '',
          postalCode: '33326',
          subdivision: {
            code: 'FL',
          },
        },
      },
    },
  })
  .add('in a reactive form', {
    template: `
      <form [formGroup]="autocompleteForm" (ngSubmit)="onSubmit(autocompleteForm.value)">
        <nu-autocomplete-places
          formControlName="address"
        ></nu-autocomplete-places>
        <nu-autocomplete-places
          formControlName="prefilledAddress"
          displayName="Prefilled Address"
        ></nu-autocomplete-places>
        <button mat-raised-button type="submit">Submit</button>
      </form>
      <hr />
      <pre>{{ autocompleteForm.value | json }}</pre>
    `,
    context: {
      onSubmit(model: any) {},
      autocompleteForm: new FormGroup({
        address: new FormControl(null, Validators.required),
        prefilledAddress: new FormControl({
          city: 'Weston',
          country: {
            code: 'USA',
          },
          line1: '2250 North Commerce Parkway',
          line2: '',
          postalCode: '33326',
          subdivision: {
            code: 'FL',
          },
        }),
      }),
    },
  });
