import { Component } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-accessibility.md');

@Component({
    selector: 'demo-accessibility',
    templateUrl: './demo-accessibility.html',
})
export class DemoAccessibilityComponent {
    notes = NOTES;
}