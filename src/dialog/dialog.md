*** HTML ***

# Dialogs

## Use
Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks. Use dialogs to progressively disclose additional information, prompt users to take action or confirm choices that may be destructive or have far reaching consequences. Dialogs can also be used to present modal forms when it is important user stays in context.

See [Material Design Dialogs](https://material.io/guidelines/components/dialogs.html)
    and [Angular Material Dialogs](https://material.angular.io/components/dialog/overview).

## Sample

<mat-tab-group>
    <mat-tab label="Component Sample"><div class="tab-height">
        <button mat-raised-button (click)="openDialog()">Click Me For Dialog</button></div>
    </mat-tab>
    <mat-tab label="HTML"><div class="tab-height">
        <table style="width:100%">
            &lt;button mat-raised-button (click)="openDialogBackgroundSubscription()"&gt; Click Me For Dialog&lt;/button&gt; </table></div>
    </mat-tab>
    <mat-tab label="TS"><div class="tab-height">
        <table style="width:50%"><p>
            <p>export class DemoDialogComponent &#123;</p>
            <p>&nbsp;selectedOption: string;</p>
            <p>&nbsp;constructor(public dialog: MatDialog) &#123;}</p>
            <p>&nbsp;openDialog() &#123;</p>
            <p>&nbsp;let dialogRef = this.dialog.open(DemoDialogComponentDialog);</p>
            <p>&nbsp;dialogRef.afterClosed().subscribe(result => &#123;</p>
            <p>&nbsp;&nbsp;this.selectedOption = result;</p>
            <p>&nbsp;&nbsp;&#125;);</p>
            <p> &nbsp;}</p>
            <p>}</p>
            <p>@Component(&#123;</p>
            <p>&nbsp;selector: 'demo-dialog-dialog',</p>
            <p>&nbsp;templateUrl: './demo-dialog-dialog.html',</p>
            <p>&#125;)</p>
            <p>export class DemoDialogComponentDialog &#123;&#125;
            </p>
        </table>
    </div></mat-tab>
</mat-tab-group>

## Style

**Do**

* Do use flat buttons for dialog actions
* Do use short, succinct labels that are verbs
* Do use a titles on the dialog when it helps organize the description
* Do use only a description when a title isn't necessary
* For Simple dialogs, use only description text without a title
* Do use confirmation dialogs to inform the user of consequences or clarify desired action(s).

**Don't**

* Don't use raised buttons (except for forms in dialogs)
* Don't use a close button or a dark background on the simple dialog
* Don't use "Yes" or "No" for button actions, instead use verbs.
* Don't use a close icon


* ### Size

    * Confirmation
        * maxWidth: 360px;
        * height: (auto)
    * Simple: (TBD based on context)
    * Forms
        * maxWidth: 672px;
        * height: (in research)
        * dialogs should not take 100% of the screen width or height (except in modal)
        * for implementing size: see [MatDialogConfig](https://material.angular.io/components/form-field/overview) in Angular
        Material docs for dialogs.

## Content

* Simple dialogs appears below and to the right of an icon on mouseover and selection. Unlike the confirmation, the
background is not usually darkened (however it will be for short term) . It remains open as long as the user is hovering
over the icon or the content inside. It no longer appears when the user mouses away from either the icon or content.
It does not require dismissal for the user to interact with the page (e.g. if keyboard focus is on a field, the field
remains active).

* Forms can be presented in a dialog (aka modal screen) when it's important to keep context and the form is relatively
small. For large or multi-step forms, navigate user to a new view page.
Forms in dialog should follow the same layout as forms not in dialogs
when cancel and delete are actions for the form, present a confirmation dialog when users attempt to execute a
destructive action, cancel (discard information) or delete. This dialog will come over top of the form within the dialog.

### Confirmation dialogs

* Confirmation dialogs require users to explicitly confirm a choice. It is a modal that requires action before the system
    can move on.
* Confirmations appear via modal (on a darkened background (called a scrim)) to indicate the content below is
    no longer interactive.


### Simple dialog

* Simple dialogs provide in-context assistance such as a definition of a complex term, details, or actions about a list
item. Their intent is to help the user understand something that may not be clear without interrupting the users flow.

## Dialog Components

<mat-accordion>
    <mat-expansion-panel>
        <mat-expansion-panel-header>
            <mat-panel-title><b>
                Catch Background Clicked
            </b></mat-panel-title>
            <mat-panel-description><i>Provides a subscription to a modals background being clicked</i></mat-panel-description>
        </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Content Sample"><div class="tab-height">
                <button mat-raised-button (click)="openDialogBackgroundSubscription()">Click Me For Enhanced Dialog</button>
            </div></mat-tab>
            <mat-tab label="TS"><div class="tabHeight">
                <table style="width:50%">
                    <p>let dialogRef = this.dialog.open(DemoDialogComponentDialogBackground, &#123; disableClose: true &#125;);</p>
                    <p>Observable.merge(this.dialogRef.backdropClick())</p>
                    <p>&nbsp;.map(() => &#123;Action&#125;)</p>
                    <p>&nbsp; &nbsp;.subscribe();</p>
                </table>
            </div></mat-tab>
        </mat-tab-group>
    </mat-expansion-panel>
    <mat-expansion-panel>
        <mat-expansion-panel-header>
            <mat-panel-title><b>
                Adding Save/Cancel confirmation dialog
            </b></mat-panel-title>
            <mat-panel-description><i>Creates a confirmation dialog to confirm an action taken within another dialog</i></mat-panel-description>
        </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Main TS"><div class="tab-height">
                <table style="width:50%">
                    <p>dialogRefMain: any; </p>
                    <p>openMainDialog() &#123;</p>
                    <p>&nbsp; this.dialogRefMain = this.dialog.open(DemoDialogComponentDialogBackground, &#123;disableClose: true&#125;);</p>
                    <p>&nbsp; Observable.merge(this.dialogRefMain.backdropClick())</p>
                    <p>&nbsp; &nbsp;.map(() => this.openDialogAcceptReject())</p>
                    <p>&nbsp; &nbsp; &nbsp;.subscribe();</p>
                    <p>&#125;</p>
                    <p>openDialogAcceptReject(): void &#123;</p>
                    <p>&nbsp;this.dialog.open(DemoDialogAcceptCancelComponent)</p>
                    <p>&nbsp; &nbsp;.afterClosed()</p>
                    <p>&nbsp; &nbsp; &nbsp;.subscribe(response => &#123;</p>
                    <p>&nbsp; &nbsp; &nbsp; &nbsp;if (response) &#123;</p>
                    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;this.dialogRefMain.close()</p>
                    <p>&nbsp; &nbsp; &nbsp; &nbsp;&#125;;</p>
                    <p>&nbsp; &nbsp; &#125;);</p>
                    <p>&#125;</p>
                </table>
            </div></mat-tab>
            <mat-tab label="Accept/Reject Dialog TS"><div class="tab-height">
                <table style="width:50%">
                    <p>import &#123; Component &#125; from '@angular/core';</p>
                    <p>import &#123; MatDialogRef &#125; from '@angular/material';</p>
                    <p>@Component(&#123;</p>
                    <p>&nbsp;selector: 'ign-dialog-cancel',</p>
                    <p>&nbsp;templateUrl: './dialog-accept-cancel.component.html'</p>
                    <p>&#125;)</p>
                    <p>export class DemoDialogAcceptCancelComponent &#123;</p>
                    <p>&nbsp;constructor(</p>
                    <p>&nbsp;&nbsp;public dialogRef: MatDialogRef&lt;DemoDialogAcceptCancelComponent&gt;) &#123; &#125;</p>
                    <p> &nbsp;//Passes data from this modal back to an onclose subscriber of the original modal</p>
                    <p> &nbsp;onExitClick(data): void &#123;</p>
                    <p>&nbsp;&nbsp;this.dialogRef.close(data);</p>
                    <p>&nbsp;&#125;</p>
                    <p>&#125;</p>
                </table>
            </div></mat-tab>
            <mat-tab label="Accept/Reject Dialog HTML"><div class="tab-height">
                <table style="width:50%">
                    <p>&lt;div mat-dialog-content&gt;</p>
                    <p>&nbsp; &lt;p&gt;You have clicked outside the modal. Does this mean you want to exit?&lt;/p&gt;</p>
                    <p>&lt;/div&gt;</p>
                    <p> &lt;div mat-dialog-actions align="end"&gt;</p>
                    <p> &nbsp;&lt;button mat-button (click)="onExitClick(true)"&gt;Yes&lt;/button&gt;</p>
                    <p>&nbsp;&lt;button mat-button color="accent" (click)="onExitClick(false)"&gt;No&lt;/button&gt;</p>
                    &lt;/div&gt;
                </table>
            </div></mat-tab>
        </mat-tab-group>
    </mat-expansion-panel>
</mat-accordion>

*** TypeScript *** 

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

*** ExternalTypeScript ***
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

*** Imports ***
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { DemoDialogAcceptCancelComponent } from './demo-dialog-accept-cancel.component';