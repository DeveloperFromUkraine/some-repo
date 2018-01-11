import { Component } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-dialog.md');

@Component({
  selector: 'demo-dialog',
  templateUrl: './demo-dialog.html',
})
export class DemoDialogComponent {
  notes = NOTES;
}
