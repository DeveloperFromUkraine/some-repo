import { Component } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-card.md');

@Component({
    selector: 'demo-card',
    templateUrl: './demo-card.html',
    styleUrls: ['./demo-card.css'],
})
export class DemoCardComponent {
    notes = NOTES;
}