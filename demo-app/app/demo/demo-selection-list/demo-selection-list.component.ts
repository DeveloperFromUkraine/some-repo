import { Component, ViewEncapsulation } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-selection-list.md');

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'demo-selection-list',
    templateUrl: './demo-selection-list.html',
    styleUrls: ['./demo-selection-list.css'],
})
export class DemoSelectionListComponent {
    notes = NOTES;
    typesOfOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

}
