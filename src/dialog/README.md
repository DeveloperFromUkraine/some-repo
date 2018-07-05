## Use
    - The MatDialog service can be used to open modal dialogs with Material Design styling and animations.
    - A dialog is opened by calling the open method with a component to be loaded and an optional config object.    The open method will return an instance of MatDialogRef.
    - The MatDialogRef provides a handle on the opened dialog. It can be used to close the dialog and to receive     notification when the dialog has been closed.
    - Components created via MatDialog can inject MatDialogRef and use it to close the dialog in which they are     contained. When closing, an optional result value can be provided. This result value is forwarded as the      result of the afterClosed promise.
    - See [Angular Material Dialog](https://material.angular.io/components/dialog/overview). 

     ### Sharing data with the Dialog component
        - If you want to share data with your dialog, you can use the data option to pass information to the        dialog component.
        - To access the data in your dialog component, you have to use the MAT_DIALOG_DATA injection token:

     ### Accessibility
        -By default, each dialog has role="dialog" on the root element. The role can be changed to alertdialog      via the MatDialogConfig when opening.
        -The aria-label, aria-labelledby, and aria-describedby attributes can all be set to the dialog element      via the MatDialogConfig as well. Each dialog should typically have a label set via aria-label or          aria-labelledby.
        -When a dialog is opened, it will move focus to the first focusable element that it can find. In order to   prevent users from tabbing into elements in the background, the Material dialog uses a focus trap to      contain focus within itself. Once a dialog is closed, it will return focus to the element that was        focused before the dialog was opened.

    ### Focus management
        -By default, the first tabbable element within the dialog will receive focus upon open. This can be         configured by setting the cdkFocusInitial attribute on another focusable element.
        -Tabbing through the elements of the dialog will keep focus inside of the dialog element, wrapping back     to the first tabbable element when reaching the end of the tab sequence.

    ### Keyboard interaction
        - By default pressing the escape key will close the dialog. While this behavior can be turned off via the   disableClose option, users should generally avoid doing so as it breaks the expected interaction          pattern for screen-reader users.

    ### Content

    - Simple dialogs appears below and to the right of an icon on mouseover and selection. Unlike the               confirmation, the background is not usually darkened (however it will be for short term) . It remains open    as long as the user is hovering over the icon or the content inside. It no longer appears when the user       mouses away from either the icon or content. It does not require dismissal for the user to interact with      the page (e.g. if keyboard focus is on a field, the field remains active).
    - Forms can be presented in a dialog (aka modal screen) when it's important to keep context and the form is     relatively small. For large or multi-step forms, navigate user to a new view page. Forms in dialog should     follow the same layout as forms not in dialogs when cancel and delete are actions for the form, present a     confirmation dialog when users attempt to execute a destructive action, cancel (discard information) or       delete. This dialog will come over top of the form within the dialog.

    ### Confirmation dialogs
        - Confirmation dialogs require users to explicitly confirm a choice. It is a modal that requires action     before the system can move on.
        - Confirmations appear via modal (on a darkened background (called a scrim)) to indicate the content        below is no longer interactive.

    ### Simple dialog
        - Simple dialogs provide in-context assistance such as a definition of a complex term, details, or actions about a list item. Their intent is to help the user understand something that may not be clear without interrupting the users flow.

    ### Style
        Do

        Do use flat buttons for dialog actions
        Do use short, succinct labels that are verbs
        Do use a titles on the dialog when it helps organize the description
        Do use only a description when a title isn't necessary
        For Simple dialogs, use only description text without a title
        Do use confirmation dialogs to inform the user of consequences or clarify desired action(s).

        Don't

        Don't use raised buttons (except for forms in dialogs)
        Don't use a close button or a dark background on the simple dialog
        Don't use "Yes" or "No" for button actions, instead use verbs.
        Don't use a close icon

    ### Size

        * Confirmation
            - maxWidth: 360px;
            - height: (auto)
        * Simple: (TBD based on context)
        * Forms
            - maxWidth: 672px;
            - height: (in research)
            - dialogs should not take 100% of the screen width or height (except in modal)
            - for implementing size: see MatDialogConfig in Angular Material docs for dialogs.


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
