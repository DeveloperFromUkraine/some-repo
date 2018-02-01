import { Component } from '@angular/core';

const NOTES: string = require('raw-loader!./demo-icon.md');

@Component({
    selector: 'demo-icon',
    templateUrl: './demo-icon.html',
    styleUrls: ['./demo-icon.css'],
})

export class DemoIconComponent {
    notes = NOTES;
}
