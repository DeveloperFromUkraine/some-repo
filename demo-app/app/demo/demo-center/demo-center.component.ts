import { Component } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-center.md');

@Component({
    selector: 'demo-center',
    templateUrl: './demo-center.html',
})
export class DemoCenterComponent {
    notes = NOTES;
}