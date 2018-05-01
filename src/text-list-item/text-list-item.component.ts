import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'ign-text-list-item',
  templateUrl: './text-list-item.html',
  styleUrls: ['./text-list-item.scss'],
})
export class TextListItemComponent implements OnChanges {
  @Input() primaryText: string;
  @Input() secondaryText: string;
  @Input() tertiaryText: string;

  displayedPrimaryText: string;
  displayedSecondaryText: string;
  displayedTertiaryText: string;

  ngOnChanges() {
    this.displayedPrimaryText = this.primaryText;
    this.displayedSecondaryText = this.secondaryText;
    this.displayedTertiaryText = this.tertiaryText;

    // if no primary text is passed and there is secondary text
    if (!this.primaryText && this.secondaryText) {
      // display secondary text as primary text
      this.displayedPrimaryText = this.secondaryText;
      // if there is tertiary text
      if (this.tertiaryText) {
        // display tertiary text as secondary text and don't display any tertiary text
        this.displayedSecondaryText = this.tertiaryText;
        this.displayedTertiaryText = '';
      } else {
        // else don't display any secondary text
        this.displayedSecondaryText = '';
      }
    }
  }
}
