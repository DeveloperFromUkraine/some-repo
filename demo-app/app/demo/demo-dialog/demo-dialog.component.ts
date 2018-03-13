import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { DemoDialogAcceptCancelComponent } from './demo-dialog-accept-cancel.component';

const NOTES: string = require('raw-loader!./demo-dialog.md');

@Component({
    selector: 'demo-dialog',
    templateUrl: './demo-dialog.html',
})
export class DemoDialogComponent {
    notes = NOTES;

    selectedOption: string;
    dialogRefMain: any;

    constructor(public dialog: MatDialog) {}

    openDialog() {
        let dialogRef = this.dialog.open(DemoDialogComponentDialog);
        dialogRef.afterClosed().subscribe(result => {
            this.selectedOption = result;
        });
    }

    openDialogBackgroundSubscription() {
        this.dialogRefMain = this.dialog.open(DemoDialogComponentDialogBackground, {disableClose: true});

        Observable.merge(this.dialogRefMain.backdropClick())
            .map(() => this.openDialogAcceptReject())
            .subscribe();
    }

    openDialogAcceptReject(): void {
        this.dialog.open(DemoDialogAcceptCancelComponent)
            .afterClosed()
            .subscribe(response => {
                if (response) {
                    this.dialogRefMain.close()
                };
            });
    }
}

@Component({
    selector: 'demo-dialog-dialog',
    templateUrl: './demo-dialog-dialog.html',
})
export class DemoDialogComponentDialog {}

@Component({
    selector: 'demo-dialog-dialog-background',
    templateUrl: './demo-dialog-dialog-background.html',
})
export class DemoDialogComponentDialogBackground {}

