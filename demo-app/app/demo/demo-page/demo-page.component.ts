import {Component,  ViewEncapsulation} from '@angular/core';
const NOTES: string = require('raw-loader!./demo-page.md');

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'demo-page',
    templateUrl: './demo-page.html',
    styleUrls: ['./demo-page.css'],
})
export class DemoPageComponent {
    notes = NOTES;
}
