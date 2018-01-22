import {Component,  ViewEncapsulation} from '@angular/core';
const NOTES: string = require('raw-loader!./demo-sidenav.md');

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'demo-sidenav',
    templateUrl: './demo-sidenav.html',
    styleUrls: ['./demo-sidenav.css'],
})
export class DemoSidenavComponent {
    notes = NOTES;
}