*** HTML ***
# Field

## Use
This component displays a view field, consisting of a label and a value. 

## Sample

<mat-tab-group>
    <mat-tab label="Component Sample">
        <div class="tab-height">
            <ign-field label="The Answer">42</ign-field>
        </div></mat-tab>
    <mat-tab label="HTML"><div class="tab-height">
        <table style="width:100%">
            &lt;ign-field label="The Answer"&gt;42&lt;/ign-field&gt;
        </table>
    </div></mat-tab>
</mat-tab-group>

## Content

* The contents of the tag will be displayed as the value.

## Style

* A label must be provided.
* A value pertaining to the label must be provided if user input is not requested.

## Accessibility

* For editable field and editable inline field components, a default aria label has been added for the edit button.
* For a more descriptive label, add an ariaBtnLabel attribute and provide a more descriptive value.
* Refer to the sample html in the accordion below for examples of usage.

## Field Components

<mat-accordion id="accordion">
    <mat-expansion-panel>
        <mat-expansion-panel-header>
            <mat-panel-title>
                ign-field-inline
            </mat-panel-title>
            <mat-panel-description><i>Field component with inline formatting.</i></mat-panel-description>
        </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>This component is similar to the ign-field but slightly different look and feel. </li>
                    <li>Label will appear first followed by the text value on the same row.</li>
                    <li>A label must be provided. </li>
                    <li>The contents of the tag will be displayed as the value.</li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p> &lt;ign-field-inline label="The Answer"&gt;42&lt;/ign-field-inline&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
    </mat-expansion-panel>
    <mat-expansion-panel>
        <mat-expansion-panel-header>
            <mat-panel-title>
                ign-editable-field
            </mat-panel-title>
            <mat-panel-description><i>Editable field component.</i></mat-panel-description>
        </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>Similar to the field component but also includes an edit button that emits an event that can be subscribed to.</li>
                    <li>A label must be provided. The contents of the tag will be displayed as the value.</li>
                    <li>An editIcon can be optionaly provided; if none passed the button will display mat-icon mode_edit as default. </li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p> &lt;ign-editable-field label="The Answer" ariaBtnLabel="The Answer" (onIconClick)="myFn($event)"&gt;42&lt;/ign-editable-field&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
    </mat-expansion-panel>
    <mat-expansion-panel>
        <mat-expansion-panel-header>
            <mat-panel-title>
                ign-editable-field-inline
            </mat-panel-title>
            <mat-panel-description><i>Editable field component with inline styling.</i></mat-panel-description>
        </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>Similar to the editable field above but slightly different look and feel. </li>
                    <li>Label will appear first followed by the text value followed by the edit button on the same row.</li>
                    <li>A label must be provided.</li>
                    <li>The contents of the tag will be displayed as the value.</li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p> &lt;ign-editable-field-inline label="The Answer" ariaBtnLabel="The Answer" editIcon="home" (onIconClick)="myFn($event)"&gt;42&lt;/ign-editable-field-inline&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
    </mat-expansion-panel>
</mat-accordion>

*** TypeScript *** 

*** ExternalTypeScript ***

*** Imports ***