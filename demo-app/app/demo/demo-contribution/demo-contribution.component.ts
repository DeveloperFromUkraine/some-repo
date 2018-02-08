import { Component } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-contribution.md');

@Component({
    selector: 'demo-contribution',
    templateUrl: './demo-contribution.html',
})
export class DemoContributionComponent {
    notes = NOTES;
}