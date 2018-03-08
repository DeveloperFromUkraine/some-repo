import { Component } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-right-align-container.md');

@Component({
    selector: 'demo-right-align-container',
    templateUrl: './demo-right-align-container.html',
})
export class DemoRightAlignContainerComponent {
    notes = NOTES;
}