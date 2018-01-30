import { Component, ViewEncapsulation } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-radio-button.md');

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'demo-radio-button',
  templateUrl: './demo-radio-button.html',
  styleUrls: ['./demo-radio-button.css'],
})
export class DemoRadioButtonComponent {
  notes = NOTES;
  rowOfRadioButtons: string;

    buttons = [
        'I AM A BUTTON',
        'CLICK ON ME !',
    ];
}
