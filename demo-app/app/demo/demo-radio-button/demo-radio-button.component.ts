import { Component } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-radio-button.md');

@Component({
    selector: 'demo-radio-button',
    templateUrl: './demo-radio-button.html',
})
export class DemoRadioButtonComponent {
    notes = NOTES;
    rowOfRadioButtons: string;

    buttons = [
        'I AM A BUTTON',
    ];
}