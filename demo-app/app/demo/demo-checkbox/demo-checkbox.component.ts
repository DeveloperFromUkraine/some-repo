import { Component } from '@angular/core';

const NOTES: string = require('raw-loader!./demo-checkbox.md');

@Component({
  selector: 'demo-checkbox',
  templateUrl: './demo-checkbox.html',
  styleUrls: ['./demo-checkbox.css'],
})

export class DemoCheckboxComponent {
  notes = NOTES;
}
