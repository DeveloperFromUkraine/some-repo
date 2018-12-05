import {NgModule} from '@angular/core';
import {MatButtonModule, MatCommonModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {ExpandableSearchComponent} from './expandable-search.component';
import {TranslationModule} from '../localization/translation.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    TranslationModule
  ],
  declarations: [ExpandableSearchComponent],
  exports: [ExpandableSearchComponent, MatCommonModule]
})
export class ExpandableSearchModule {}
