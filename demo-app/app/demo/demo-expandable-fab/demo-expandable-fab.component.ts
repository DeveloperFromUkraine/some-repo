import { Component } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-expandable-fab.md');

@Component({
    selector: 'demo-expandable-fab',
    templateUrl: './demo-expandable-fab.html',
    styleUrls: ['./demo-expandable-fab.css'],
})
export class DemoExpandableFabComponent {
    notes = NOTES;
}
