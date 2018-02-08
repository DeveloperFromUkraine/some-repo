import { Component } from '@angular/core';
const NOTES: string = require('raw-loader!./demo-markdown.md');
const STYLEDNOTES: string = require('raw-loader!./demo-markdown-styled.md');

@Component({
    selector: 'demo-markdown',
    templateUrl: './demo-markdown.html',
})
export class DemoMarkdownComponent {
    notes = NOTES;
    styledNotes = STYLEDNOTES;
}