import {Component, ViewEncapsulation} from '@angular/core';
const NOTES: string = require('raw-loader!./demo-divider.md');

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'demo-divider',
    templateUrl: './demo-divider.html',
    styleUrls: ['./demo-divider.css'],
})
export class DemoDividerComponent {
    notes = NOTES;
}