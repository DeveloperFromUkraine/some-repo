import {Component,  ViewEncapsulation} from '@angular/core';
const NOTES: string = require('raw-loader!./demo-expandable-fab.md');

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'demo-expandable-fab',
    templateUrl: './demo-expandable-fab.html',
    styleUrls: ['./demo-expandable-fab.css'],
})
export class DemoExpandableFabComponent {
    notes = NOTES;
}
