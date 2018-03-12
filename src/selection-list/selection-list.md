*** HTML ***
# Selection List

## Use
A selection list provides an interface for selecting values, where each list item is an option.
See [Material Design List](https://material.io/guidelines/style/icons.html) and [Angular Material List Controls](https://material.io/guidelines/components/lists-controls.html#lists-controls-usage).

## Sample

<mat-tab-group>
        <mat-tab label="Component Sample">
            <div class="tab-height">
                <mat-selection-list \#options>
                    <mat-list-option \*ngFor="let option of typesOfOptions">
                        {{option}}
                    </mat-list-option>
                </mat-selection-list>
                <p>
                    Options selected: {{options.selectedOptions.selected.length}}
                </p>
            </div></mat-tab>
        <mat-tab label="HTML"><div class="tab-height">
            <table style="width:100%">
                <p>   &lt;mat-selection-list \#options&gt;</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&lt;mat-list-option \*ngFor="let option of typesOfOptions"&gt;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;option&#125;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/mat-list-option&gt;</p>
                <p>&lt;/mat-selection-list&gt;</p>
                <p>&lt;p&gt; </p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Options selected: {{options.selectedOptions.selected.length}}</p>
                <p>&lt;/p&gt;</p>
            </table>
        </div></mat-tab>
        <mat-tab label="TS"><div class="tab-height">
            <table style="width:100%">
                typesOfOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
            </table>
        </div></mat-tab>
    </mat-tab-group>

## Content

* The options within a selection-list should not contain further interactive controls, such as buttons and anchors.
* To add an icon to your list item, use the matListIcon attribute.


## Style

* Each selection-list item should be concise.
* A selection list must contain more than one selection-list item in the list.

*** TypeScript *** 

*** ExternalTypeScript ***

*** Imports ***