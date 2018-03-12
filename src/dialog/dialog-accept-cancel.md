*** HTML ***

<div mat-dialog-content>
    <p>You have clicked outside the modal. Does this mean you want to exit?</p>
</div>
<div mat-dialog-actions align="end">
    <button mat-button (click)="onExitClick(true)" >Yes</button>
    <button mat-button color="accent" (click)="onExitClick(false)">No</button>
</div>

*** TypeScript *** 

    constructor(
        public dialogRef: MatDialogRef<DemoDialogAcceptCancelComponent>) { }

     //Passes data from this modal back to an onclose subscriber of the original modal
        onExitClick(data): void {
        this.dialogRef.close(data);
    }

*** ExternalTypeScript ***

*** Imports ***

import { MatDialogRef } from '@angular/material';