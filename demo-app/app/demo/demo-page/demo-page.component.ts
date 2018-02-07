import { Component } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-page.md');

@Component({
    selector: 'demo-page',
    templateUrl: './demo-page.html',
})
export class DemoPageComponent {
    notes = NOTES;
}