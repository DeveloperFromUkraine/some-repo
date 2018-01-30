import { Component } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-select-container.md');

@Component({
    selector: 'demo-select-container',
    templateUrl: './demo-select-container.html',
    styleUrls: ['./demo-select-container.css'],
})
export class DemoSelectContainerComponent {
    notes = NOTES;

}
