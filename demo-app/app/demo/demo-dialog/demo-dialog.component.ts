import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
const NOTES: string = require('raw-loader!./demo-dialog.md');

@Component({
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