*** HTML ***
# Button Group

## Use
The button group component is utilized as a container for groups of buttons. The button group provides 
styling and horiztonal formatting for larger groups of buttons and allows for responsive equality of the
individual buttons.

## Sample
<mat-tab-group>
    <mat-tab label="Component Sample">
        <div class="tab-height">
                <ign-button-group>
                    <button
                    mat-raised-button
                    mat-button
                    type="submit"
                    color="accent">
                    Button 1
                </button>
                <button
                    mat-raised-button
                    mat-button
                    type="submit"
                    color="accent">
                    Button 2
                </button>
                <button
                    mat-raised-button
                    mat-button
                    type="submit"
                    color="accent">
                    Button 3
                </button>
                <button
                    mat-raised-button
                    mat-button
                    type="submit"
                    color="accent">
                    Button 4
                </button>
                </ign-button-group>
        </div></mat-tab>
    <mat-tab label="HTML"><div class="tab-height">
        <table style="width:100%">
                <p>&lt;ign-button-group&gt;</p>
                <p>&nbsp;&nbsp;&lt;button</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;mat-raised-button</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;mat-button</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;type="submit"</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;color="accent"&gt;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Button 1</p>
                <p>&nbsp;&nbsp;&lt;/button&gt;</p>
                <p>&nbsp;&nbsp;&lt;button</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;mat-raised-button</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;mat-button</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;type="submit"</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;color="accent"&gt;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Button 2</p>
                <p>&nbsp;&nbsp;&lt;/button&gt;</p>
                <p>&nbsp;&nbsp;&lt;button</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;mat-raised-button</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;mat-button</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;type="submit"</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;color="accent"&gt;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Button 3</p>
                <p>&nbsp;&nbsp;&lt;/button&gt;</p>
                <p>&nbsp;&nbsp;&lt;button</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;mat-raised-button</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;mat-button</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;type="submit"</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;color="accent"&gt;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp; Button 4</p>
                <p>&nbsp;&nbsp;&lt;/button&gt;</p>
                <p>&lt;/ign-button-group&gt;</p>
        </table>
    </div></mat-tab>
</mat-tab-group>

## Content
* Button groups should contain multiple buttons.
* Buttons should be used for navigation, submission, and cancellation of actions.


## Style
* The button group is already pre-styled.
* Button groups should be located in upper and lower corners of other containers, such as cards or pages.

*** TypeScript *** 

*** ExternalTypeScript ***

*** Imports ***