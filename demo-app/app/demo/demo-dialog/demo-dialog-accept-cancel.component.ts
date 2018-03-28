import { Component } from '@angular/core';

import { MatDialogRef } from '@angular/material';
@Component({
    selector: 'demo-dialog-accept-cancel',
    templateUrl: './demo-dialog-accept-cancel.html',
})

export class DemoDialogAcceptCancelComponent {
     

    constructor(
        public dialogRef: MatDialogRef<DemoDialogAcceptCancelComponent>) { }

     //Passes data from this modal back to an onclose subscriber of the original modal
        onExitClick(data): void {
        this.dialogRef.close(data);
    }


}

