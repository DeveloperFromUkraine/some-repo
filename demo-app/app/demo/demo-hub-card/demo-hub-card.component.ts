import {Component, ViewEncapsulation} from '@angular/core';
const NOTES: string = require('raw-loader!./demo-hub-card.md');

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'demo-hub-card',
    templateUrl: './demo-hub-card.html',
    styleUrls: ['./demo-hub-card.css'],
})
export class DemoHubCardComponent{
    notes = NOTES;

}
