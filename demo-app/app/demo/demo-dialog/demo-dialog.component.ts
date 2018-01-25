import {Component, ViewEncapsulation} from '@angular/core';
import {MatDialog} from '@angular/material';
const NOTES: string = require('raw-loader!./demo-dialog.md');

@Component({
   encapsulation: ViewEncapsulation.None,
  selector: 'demo-dialog',
  templateUrl: './demo-dialog.html',
  styleUrls: ['./demo-dialog.css'],
})
export class DemoDialogComponent {
  notes = NOTES;

    selectedOption: string;

    constructor(public dialog: MatDialog) {}

    openDialog() {
        let dialogRef = this.dialog.open(DemoDialogComponentDialog);
        dialogRef.afterClosed().subscribe(result => {
            this.selectedOption = result;
        });
    }
}

@Component({
    selector: 'demo-dialog-dialog',
    templateUrl: './demo-dialog-dialog.html',
})
export class DemoDialogComponentDialog {}