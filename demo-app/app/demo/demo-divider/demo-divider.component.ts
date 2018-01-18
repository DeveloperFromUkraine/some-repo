import { Component } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-divider.md');

@Component({
    selector: 'demo-divider',
    templateUrl: './demo-divider.html',
})
export class DemoDividerComponent {
    notes = NOTES;
}