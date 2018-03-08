import { Component } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-button-group.md');

@Component({
    selector: 'demo-button-group',
    templateUrl: './demo-button-group.html',
})
export class DemoButtonGroupComponent {
    notes = NOTES;
}