import { Component } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-expandable-search.md');

@Component({
    selector: 'demo-expandable-search',
    templateUrl: './demo-expandable-search.html',
})
export class DemoExpandableSearchComponent {
    notes = NOTES;
}