import { Component } from '@angular/core';
const NOTES: string = require('raw-loader!./welcome.md');

@Component({
    selector: 'welcome-app',
    templateUrl: './welcome.html',
})

export class WelcomeComponent {
    notes = NOTES;
}