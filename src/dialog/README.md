## API

    ### Selector
        * mat-dialog

    ### Export As
        * None

    ### Properties
        * afterAllClosed: Observable<void>
            Stream that emits when all open dialog have finished closing. Will emit on subscribe if there are no open dialogs to begin with.

        * afterOpen: Subject<MatDialogRef<any>>
            Stream that emits when a dialog has been opened.

        * openDialogs: MatDialogRef<any>[]
            Keeps track of the currently-open dialogs.

    ### Methods:
        * closeAll
            Closes all of the currently-open dialogs.

        * getDialogById
            * Finds an open dialog by its id.
            * Parameters
                id: string	
                    * ID to use when looking up the dialog.
            * Returns MatDialogRef<any> | undefined	

        * open
            * Opens a modal dialog containing the given component.
            * Parameters
                * componentOrTemplateRef: ComponentType<T> | TemplateRef<T>	
                    * Type of the component to load into the dialog, or a TemplateRef to instantiate as the dialog content.
                * config?: MatDialogConfig<D>	
                    * Extra configuration options.
            * Returns MatDialogRef<T, R>	
                * Reference to the newly-opened dialog.

## Implementation HTML
    ### Dialog:
        <button mat-raised-button (click)="openDialogBackgroundSubscription()"> Click Me For Dialog</button>
    
    ### Save/Cancel Confirmation Dialog (Main HTML):
        <div mat-dialog-content>
        <p>You have clicked outside the modal. Does this mean you want to exit?</p>
        </div>
        <div mat-dialog-actions align="end">
        <button mat-button (click)="onExitClick(true)">Yes</button>
        <button mat-button color="accent" (click)="onExitClick(false)">No</button>
        </div>

## Implementation TS
    ### Dialog:
        export class DemoDialogComponent {
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


    ### Catch Background Clicked:
        let dialogRef = this.dialog.open(DemoDialogComponentDialogBackground, { disableClose: true };
        Observable.merge(this.dialogRef.backdropClick())
        .map(() => {Action})
        .subscribe();


    ### Save/Cancel Confirmation Dialog (Main TS):
        dialogRefMain: any;
        openMainDialog() {
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


    ### Save/Cancel Confirmation Dialog (Dialog TS):
        import { Component } from '@angular/core';
        import { MatDialogRef } from '@angular/material';
        @Component({
            selector: 'ign-dialog-cancel',
            templateUrl: './dialog-accept-cancel.component.html'
        })
        export class DemoDialogAcceptCancelComponent {
            constructor(
            public dialogRef: MatDialogRef<DemoDialogAcceptCancelComponent>) { }
            //Passes data from this modal back to an onclose subscriber of the original modal
            onExitClick(data): void {
                this.dialogRef.close(data);
            }
        }
