*** HTML ***
# Radio Buttons

## Use
Radio buttons allow the user to select one option from a set. Use radio buttons for exclusive selection if user
    needs to see all available options side-by-side. Otherwise, consider a dropdown, which uses
    less space than displaying all options.

See [Material Design Radio Button](https://material.io/guidelines/components/selection-controls.html#selection-controls-radio-button).
    and [Angular Material Radio Button](https://material.angular.io/components/radio/overview).

## Sample
<mat-tab-group>
    <mat-tab label="Component Sample"><div class="tab-height">
        <mat-radio-group class="example-radio-group" [(ngModel)]="rowOfRadioButtons">
            <mat-radio-button class="example-radio-button" \*ngFor="let button of buttons" [value]="button">
                {{button}}
            </mat-radio-button>
        </mat-radio-group></div></mat-tab>
    <mat-tab label="HTML"><div class="tab-height">
        <table style="width:100%">
            <p> &lt;mat-radio-group class="example-radio-group" [(ngModel)]="rowOfRadioButtons"&gt;</p>
            <p> &nbsp;&nbsp;&lt;mat-radio-button class="example-radio-button" \*ngFor="let button of buttons" [value]="button"&gt;</p>
            <p>{{button}} &lt;/mat-radio-button&gt;</p>
            <p> &lt;/mat-radio-group&gt;</p>
        </table></div>
    </mat-tab>
    <mat-tab label="TS"><div class="tab-height">
        <table style="width:25%">
            <p>rowOfRadioButtons: string;</p>
            <p>&nbsp;buttons = [</p>
            <p>&nbsp;&nbsp; 'I AM A BUTTON',</p>
            <p>&nbsp; ];</p>
        </table>
    </div></mat-tab>
</mat-tab-group>

## Content
* Radio button components should use succinct labels for options rather than sentences.


## Style

* Options should have 16px spacing vertically and horizontally between items.

* Do
    * Use radio buttons when scanning options is helpful, helps clarify what's being asked and there is enough space.
    * User radio buttons when several options are available but only one is requested.

* Don't
    * Don't include more than 5-7 options, depending on label length use a select menu instead.
    * Don't use long labels, consider a heading with an info dialog (for concepts that require additional instruction).

*** TypeScript *** 

 rowOfRadioButtons: string;

    buttons = [
        'I AM A BUTTON',
    ];

*** ExternalTypeScript ***

*** Imports ***