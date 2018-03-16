import { Component } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-info-banner.md');

@Component({
    selector: 'demo-info-banner',
    templateUrl: './demo-info-banner.html',
})
export class DemoInfoBannerComponent {
    notes = NOTES;
}