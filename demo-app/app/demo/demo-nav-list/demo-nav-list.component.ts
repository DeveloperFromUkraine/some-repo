import {Component,  ViewEncapsulation} from '@angular/core';
const NOTES: string = require('raw-loader!./demo-nav-list.md');

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'demo-nav-list',
    templateUrl: './demo-nav-list.html',
    styleUrls: ['./demo-nav-list.css'],
})
export class DemoNavListComponent {
    notes = NOTES;

    folders = [
        {
            name: 'Click the folders to open a blank page.',
            updated: new Date('1/1/16'),
        },
        {
            name: 'Your descriptor will go here.',
            updated: new Date('1/17/16'),
        },
        {
            name: 'The dates are just for show.',
            updated: new Date('1/28/16'),
        }
    ];
}
