import { Component } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-card.md');

@Component({
    selector: 'demo-card',
    templateUrl: './demo-card.html',
})
export class DemoCardComponent {
    notes = NOTES;
}