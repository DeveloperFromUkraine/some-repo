*** HTML ***
# Empty State

## Use
Empty state is used when a user encounter a resource page or a page of resources he/she has not yet
created/encountered. Empty state is composed of multiple empty state styled specific components. It is up to the
end user to assemble the empty state page how they see fit. (Think of it as,we give you the specific lego pieces to use, and it's up to you to build your lego).


## Sample
<mat-tab-group>
    <mat-tab label="Component Sample">
        <div class="tab-height" style="height:30vh;">
            <ign-empty-state>
                <ign-empty-state-title>
                   You've reached the example of an Empty State Page!</ign-empty-state-title>
                <ign-empty-state-description>
                   <p>This page is in an empty state. You'll want to navigate out using the buttons in your implementation,
                       but for now you'll have to settle with the side nav bar or the back button!</p>
                </ign-empty-state-description>
                <ign-button-group>
                    <button mat-button color="accent" type="button">
                        We're Buttons
                    </button>
                    <button mat-button color="accent" type="button">
                        But We Don't Work
                    </button>
                </ign-button-group>
            </ign-empty-state>
        </div></mat-tab>
    <mat-tab label="HTML"><div class="tab-height">
        <table style="width:100%">
            <p>&lt;ign-empty-state&gt;</p>
            <p>&nbsp;&nbsp;&lt;ign-empty-state-title&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;You've reached the example of an Empty State Page!&lt;/ign-empty-state-title&gt;</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&lt;ign-empty-state-description&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This page is in an empty state. You'll want to navigate out using the buttons in your implementation,</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;but for now you'll have to settle with the side nav bar or the back button!</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&lt;/ign-empty-state-description&gt;</p>
            <p> &nbsp;&nbsp;&lt;ign-button-group&gt;</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&lt;button mat-button color="accent" type="button"&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We're Buttons</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;button mat-button color="accent" type="button"&gt;</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; But We Don't Work</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;</p>
            <p> &nbsp;&nbsp;&lt;/ign-button-group&gt;</p>
            <p> &lt;/ign-empty-state&gt;</p>
        </table>
    </div></mat-tab>
</mat-tab-group>

## Content

* The empty state is used for pages and elements that do not exist. This includes:
    * Unfinished pages
    * Pages with empty groups or lists.
    * Cards with no content.
* Empty states are the default view for the list-content pattern when there are no items set up, this mainly applies to company settings and other areas that are primarily lists.
* The title and content are configurable and the content may include links (e.g., download a template)
* There are also fixed actions available "Import" and "Add" which display as available, e.g, if import is not available for the area, only add will show.

## Style

* The empty-state component has no stylistic specifications.

## Empty State Components

<mat-accordion id="accordion">
    <mat-expansion-panel>
        <mat-expansion-panel-header>
            <mat-panel-title><b>
                empty-state-title
            </b></mat-panel-title>
            <mat-panel-description><i>The empty state title component allows for a title on the empty state container.</i></mat-panel-description>
        </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>Titles should be concise and not contain descriptions.</li>
                    <li>Titles should be located above all other empty state sub components.</li>
                    <li>Titles should be centered.</li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p>&lt;ign-empty-state-title&gt; &lt;/ign-empty-state-title&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
    </mat-expansion-panel>
    <mat-expansion-panel>
        <mat-expansion-panel-header>
            <mat-panel-title><b>
                empty-state-description
            </b></mat-panel-title>
            <mat-panel-description><i>The empty state description component allows for a description in the empty state.</i></mat-panel-description>
        </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>Descriptions should be brief.</li>
                    <li>Descriptions should inform the user of the empty state.</li>
                    <li>Descriptions should be located below the empty-state-title component.</li>
                    <li>Descriptions may or may not include a redirect to the previous or other pages.</li>
                    <li>Descriptions can include buttons and button groups.</li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p>&lt;ign-empty-state-description&gt; &lt;/ign-empty-state-description&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
    </mat-expansion-panel>
    <mat-expansion-panel>
        <mat-expansion-panel-header>
            <mat-panel-title><b>
                empty-state-image
            </b></mat-panel-title>
            <mat-panel-description><i>The empty state image component allows for an image within the empty state.</i></mat-panel-description>
        </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>Images should only consume a small portion of the empty state.</li>
                    <li>Images should be contained within the empty state but not the empty-state-description component.</li>
                    <li>The default empty state displays the image component in the lower right hand corner.</li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p>&lt;ign-empty-state-image&gt; &lt;/ign-empty-state-image&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
    </mat-expansion-panel>
</mat-accordion>

*** TypeScript *** 

*** ExternalTypeScript ***

*** Imports ***