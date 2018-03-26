import { Component } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-list-content.md');

@Component({
    selector: 'demo-list-content',
    templateUrl: './demo-list-content.html',
    styleUrls: ['./demo-list-content.css'],
})
export class DemoListContentComponent {
    notes = NOTES;
    
}