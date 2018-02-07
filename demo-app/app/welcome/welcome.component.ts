import {Component,  ViewEncapsulation} from '@angular/core';
const NOTES: string = require('raw-loader!./welcome.md');

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'welcome-app',
    templateUrl: './welcome.html',
})

export class WelcomeComponent {
    notes = NOTES;
}
