import { Component } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-hub-card.md');

@Component({
    selector: 'demo-hub-card',
    templateUrl: './demo-hub-card.html',
})
export class DemoHubCardComponent{
    notes = NOTES;

}