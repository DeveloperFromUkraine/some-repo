import { sandboxOf } from 'angular-playground';
import {ExpandableSearchComponent} from './expandable-search.component';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {TranslationModule} from '../localization/translation.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export default sandboxOf(ExpandableSearchComponent, {
  imports: [BrowserAnimationsModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, TranslationModule],
}).add('Expandable Search', {
  template: `
      <ign-expandable-search></ign-expandable-search>
    `,
  styles: [
    `
      :host {
        width: 50%;
      }
    `
  ]
});
