*** HTML ***

# Snackbars And Toasts

## Use
Snackbars contain a single line of text directly related to the operation performed. They may contain a text action but no icons. see [Material Design Snackbars](https://material.io/guidelines/components/snackbars-toasts.html) and [Angular Material Snackbars](https://material.angular.io/components/snack-bar/overview)

* Brief text information to communicate system status or a success message
* Contains no icons
* Show only one snackbar message at a time (successively if more than one)
* May contain a single action but action should not be "cancel" or "dismiss"
    * For two or more actions a [Dialog](/display/IDS/Dialogs) not a even when one of the actions is a dismiss action. If the action described in the is important enough to block the of the screen it should be a dialog.   
* Automatically dismisses after a brief period of time or if user invokes action
    
<table>
<tbody>
<tr>
<td>
<h4 id="do">Do</h4>

* Use for non critical feedback like success (successfully saved or deleted) or lost connectivity
    
</td>
<td>
<h4 id="dont">Don't</h4>

* Don't use buttons or icons
* Don't use for confirmations like deleting (instead use dialog confirmation with specific decision buttons)
* Don't use for confirmations of deleting or cancelling where information will be lost.
    
</td>
</tr>
</tbody>
</table>

## Sample
<mat-tab-group>
    <mat-tab label="Component Sample">
        <button mat-button (click)="openSnackBar()" aria-label="Show an example snack-bar">
            Click here for a snack bar! It'll pop up at the bottom of the screen!
        </button>
    </mat-tab>
    <mat-tab label="HTML">
        <p>&lt;button mat-button (click)=&quot;openSnackBar()&quot; aria-label=&quot;Show an example snack-bar&quot;&gt;</p>
        <p>   Click here for a snack bar! It'll pop up at the bottom of the screen!</p>
        <p>&lt;/button&gt;</p>
    </mat-tab>
    <mat-tab label="TS">
        <p>constructor(public snackBar: MatSnackBar) {{ '{' }}{{ '}' }}</p>
        <p>openSnackBar() {{ '{' }}</p>
        <p>   this.snackBar.open(`I'm a snackbar! Hello! I'll close in a few seconds or you can click the x.`, 'x', {{ '{' }}</p>
        <p>        duration: 5000</p>
        <p>    {{ '}' }});</p>
        <p>{{ '}' }}</p>
    </mat-tab>
</mat-tab-group>

## Content
* Include a succinct 1 line message (2 lines max) and short labels for buttons.
    
## Style
* Use out-of-box styling.
    * Action (if present): accent color (dark theme)   
    * Width: auto based on content
* Duration: 5000 ms

*** TypeScript *** 

constructor(public snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open(`I'm a snackbar! Hello! I'll close in a few seconds or you can click the x.`, 'x', {
        duration: 5000
        });
    }

*** ExternalTypeScript ***

*** Imports ***
import { MatSnackBar } from '@angular/material';