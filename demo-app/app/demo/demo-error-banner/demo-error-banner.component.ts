import {Component,  ViewEncapsulation} from '@angular/core';
const NOTES: string = require('raw-loader!./demo-error-banner.md');

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'demo-error-banner',
    templateUrl: './demo-error-banner.html',
    styleUrls: ['./demo-error-banner.css'],
})
export class DemoErrorBannerComponent {
    notes = NOTES;
}
