import { Component } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-footer.md');

@Component({
    selector: 'demo-footer',
    templateUrl: './demo-footer.html',
})
export class DemoFooterComponent {
    notes = NOTES;
}