import { Component } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-selection-list.md');

@Component({
    selector: 'demo-selection-list',
    templateUrl: './demo-selection-list.html',
})
export class DemoSelectionListComponent {
    notes = NOTES;
    typesOfOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

}