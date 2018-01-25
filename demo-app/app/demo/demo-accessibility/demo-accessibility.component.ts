import {Component,  ViewEncapsulation} from '@angular/core';
const NOTES: string = require('raw-loader!./demo-accessibility.md');

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'demo-accessibility',
    templateUrl: './demo-accessibility.html',
    styleUrls: ['./demo-accessibility.css'],
})
export class DemoAccessibilityComponent {
    notes = NOTES;
}
