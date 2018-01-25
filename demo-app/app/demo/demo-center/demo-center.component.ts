import {Component, ViewEncapsulation} from '@angular/core';
const NOTES: string = require('raw-loader!./demo-center.md');

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'demo-center',
    templateUrl: './demo-center.html',
    styleUrls: ['./demo-center.css'],
})
export class DemoCenterComponent {
    notes = NOTES;
}