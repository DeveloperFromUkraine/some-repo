import { Component } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-text.md');

@Component({
    selector: 'demo-text',
    templateUrl: './demo-text.html',
    styleUrls: ['./demo-text.css'],
})
export class DemoTextComponent {
    notes = NOTES;
}
