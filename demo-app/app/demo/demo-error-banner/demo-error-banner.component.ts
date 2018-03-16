import { Component } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-error-banner.md');

@Component({
    selector: 'demo-error-banner',
    templateUrl: './demo-error-banner.html',
})
export class DemoErrorBannerComponent {
    notes = NOTES;
}