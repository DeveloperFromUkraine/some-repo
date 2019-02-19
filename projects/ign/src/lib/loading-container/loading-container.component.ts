import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';

import { TranslationPipe } from '../localization/translation.pipe';

const DEFAULT_LOADING_DELAY_MS = 400;

@Component({
  selector: 'ign-loading-container',
  styleUrls: ['./loading-container.css'],
  templateUrl: './loading-container.html',
})
export class LoadingContainerComponent implements OnInit {
  @Input() loading: boolean;
  @Input() ariaLabel: string;
  spinnerAriaLabel: string;
  pastDelay: boolean;
  private delay: number;
  translatePipe: TranslationPipe;

  constructor(changeRef: ChangeDetectorRef) {
    this.delay = DEFAULT_LOADING_DELAY_MS;
    this.loading = true;
    this.pastDelay = false;
    this.translatePipe = new TranslationPipe(changeRef);
    this.spinnerAriaLabel = this.translatePipe.transform('LOADING');
  }

  ngOnInit() {
    if (this.ariaLabel) {
      this.spinnerAriaLabel = this.ariaLabel;
    }
    setTimeout(() => {
      this.pastDelay = true;
    }, this.delay);
  }
}
