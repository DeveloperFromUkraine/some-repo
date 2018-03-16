import { Component } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-sidenav.md');

@Component({
    selector: 'demo-sidenav',
    templateUrl: './demo-sidenav.html',
})
export class DemoSidenavComponent {
    notes = NOTES;
}