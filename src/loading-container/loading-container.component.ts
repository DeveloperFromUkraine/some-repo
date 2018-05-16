import { Component, Input, OnInit } from '@angular/core';

const DEFAULT_LOADING_DELAY_MS = 400;

@Component({
  selector: 'ign-loading-container',
  styleUrls: ['./loading-container.scss'],
  templateUrl: './loading-container.html',
})
export class LoadingContainerComponent implements OnInit {
  @Input() loading: boolean;
  @Input() ariaLabel = 'LOADING';
  spinnerAriaLabel: string;
  pastDelay: boolean;
  private delay: number;
  private delayTimeout: any;

  constructor() {
    this.delay = DEFAULT_LOADING_DELAY_MS;
    this.loading = true;
    this.pastDelay = false;
  }

  ngOnInit() {
    this.spinnerAriaLabel = this.ariaLabel;
    this.delayTimeout = setTimeout(() => {
      this.pastDelay = true;
    }, this.delay);
  }
}
