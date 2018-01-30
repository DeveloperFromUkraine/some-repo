import { Component } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-loading-container.md');

@Component({
    selector: 'demo-loading-container',
    templateUrl: './demo-loading-container.html',
    styleUrls: ['./demo-loading-container.css'],
})
export class DemoLoadingContainerComponent {
    notes = NOTES;
}
