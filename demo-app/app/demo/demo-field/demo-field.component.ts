import {Component,  ViewEncapsulation} from '@angular/core';
const NOTES: string = require('raw-loader!./demo-field.md');

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'demo-field',
    templateUrl: './demo-field.html',
    styleUrls: ['./demo-field.css'],
})
export class DemoFieldComponent {
    notes = NOTES;
}
