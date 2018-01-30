import {Component, ViewEncapsulation} from '@angular/core';

const NOTES: string = require('raw-loader!./demo-checkbox.md');

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'demo-checkbox',
  templateUrl: './demo-checkbox.html',
  styleUrls: ['./demo-checkbox.css'],
})

export class DemoCheckboxComponent {
  notes = NOTES;
}
