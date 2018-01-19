import {Component} from '@angular/core';
const NOTES: string = require('raw-loader!./demo-empty-state.md');

@Component({
    selector: 'demo-empty-state',
    templateUrl: './demo-empty-state.html',
    styleUrls: ['./demo-empty-state.css'],
})
export class DemoEmptyStateComponent {
    notes = NOTES;
}