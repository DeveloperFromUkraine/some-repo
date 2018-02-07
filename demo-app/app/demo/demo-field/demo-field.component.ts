import { Component } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-field.md');

@Component({
    selector: 'demo-field',
    templateUrl: './demo-field.html',
})
export class DemoFieldComponent {
    notes = NOTES;
}