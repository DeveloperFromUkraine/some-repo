import { Component } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-right-drawer.md');

@Component({
    selector: 'demo-right-drawer',
    templateUrl: './demo-right-drawer.html',
    styleUrls: ['./demo-right-drawer.css'],
})
export class DemoRightDrawerComponent {
    notes = NOTES;
}
