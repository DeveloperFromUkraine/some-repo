import { Component } from '@angular/core';

const NOTES: string = require('raw-loader!./demo-checkbox.md');

@Component({
    selector: 'demo-checkbox',
    templateUrl: './demo-checkbox.html',
})

export class DemoCheckboxComponent {
    notes = NOTES;
}