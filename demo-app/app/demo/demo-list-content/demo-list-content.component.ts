import {Component,  ViewEncapsulation} from '@angular/core';
const NOTES: string = require('raw-loader!./demo-list-content.md');

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'demo-list-content',
    templateUrl: './demo-list-content.html',
    styleUrls: ['./demo-list-content.css'],
})
export class DemoListContentComponent {
    notes = NOTES;
}
