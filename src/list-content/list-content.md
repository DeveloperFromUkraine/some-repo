*** HTML ***
#List

## Use

List components are used for a large selection of content that is individualized based on the users' needs. List
    components consist of a list view with summarized information and a content view, which provides more information on the respective
    list item from the list view. In most cases, list components allow for the user to add and remove list items. 

## Sample

<mat-tab-group>
    <mat-tab label="Component Sample">
        <div class="tab-height" style="height:40vh;">
            <ign-list-content>
                <!-- List View  -->
                <ign-list-selection>
                    <ign-list-selection-item
                            [key]="'I Am A Key'"
                            [title]="'I Am A List View Title'"
                            [subtitle]="'I Am A List View Subtitle'"
                    >
                    </ign-list-selection-item>
                </ign-list-selection>
                <!-- Content View -->
                <ign-list-content-panel>
                    <ign-list-content-empty-state>
                        <button
                                mat-button
                                mat-raised-button
                                color="accent"
                                type="button">
                            Add
                        </button>
                    </ign-list-content-empty-state>
                    <ign-list-content-unselected-state>
                        <ign-card-title>Content View</ign-card-title>
                    </ign-list-content-unselected-state>
                    <ign-list-content-card>
                        This is content!
                    </ign-list-content-card>
                </ign-list-content-panel>
            </ign-list-content>
        </div></mat-tab>
    <mat-tab label="HTML"><div class="tab-height">
        <p> &lt;ign-list-content&gt;</p>
        <p>   &nbsp; &lt;!-- List View  --&gt; </p>
        <p>    &nbsp; &lt;ign-list-selection&gt; </p>
        <p>    &nbsp;&nbsp;  &lt;ign-list-selection-item </p>
        <p>    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [key]="'I Am A Key'" </p>
        <p>    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [title]="'I Am A List View Title'" </p>
        <p>    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [subtitle]="'I Am A List View Subtitle'" </p>
        <p>    &nbsp;&nbsp;  &gt; </p>
        <p>    &nbsp;&nbsp;  &lt;/ign-list-selection-item&gt; </p>
        <p>    &nbsp; &lt;/ign-list-selection&gt; </p>
        <p>    &nbsp; &lt;!-- Content View --&gt; </p>
        <p>    &nbsp; &lt;ign-list-content-panel role="main" &gt; </p>
        <p>    &nbsp;&nbsp;  &lt;ign-list-content-empty-state&gt; </p>
        <p>   &nbsp;&nbsp;&nbsp;&nbsp;&lt;button </p>
        <p>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  mat-button </p>
        <p>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  mat-raised-button </p>
        <p>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  color="accent" </p>
        <p>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  type="button"&gt; </p>
        <p>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Add </p>
        <p>   &nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt; </p>
        <p>   &nbsp;&nbsp;  &lt;/ign-list-content-empty-state&gt; </p>
        <p>   &nbsp;&nbsp;  &lt;ign-list-content-unselected-state&gt; </p>
        <p>   &nbsp;&nbsp;&nbsp;&nbsp;&lt;ign-card-title&gt;Content View&lt;/ign-card-title&gt; </p>
        <p>   &nbsp;&nbsp;  &lt;/ign-list-content-unselected-state&gt; </p>
        <p>   &nbsp;&nbsp;  &lt;ign-list-content-card&gt;</p>
        <p>   &nbsp;&nbsp;&nbsp;&nbsp;This is content! </p>
        <p>   &nbsp;&nbsp;  &lt;/ign-list-content-card&gt; </p>
        <p>  &nbsp; &lt;/ign-list-content-panel&gt; </p>
        <p>   &lt;/ign-list-content&gt;
    </div></mat-tab>
</mat-tab-group>

## List Components

<mat-accordion id = "accordion">
    <mat-expansion-panel>
        <mat-expansion-panel-header>
            <mat-panel-title><b>
                list-content
            </b></mat-panel-title>
            <mat-panel-description><i>Houses the content for the list component</i></mat-panel-description>
        </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>List-content houses the content components and has no stylistic specifications.</li>
                    <li>List-content is required to be implemented for the list component.</li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p>&lt;ign-list-content&gt;&lt;/ign-list-content&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
    </mat-expansion-panel>
    <mat-expansion-panel>
        <mat-expansion-panel-header>
            <mat-panel-title><b>
                list-content-card
            </b></mat-panel-title>
            <mat-panel-description><i>Creates the card for the content of the list component</i></mat-panel-description>
        </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>This component should remain on the right hand side of the list component.</li>
                    <li>List-content-card creates the card that houses the list component's content and is needed
                        for the list component.</li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p>&lt;ign-list-content-card&gt;&lt;/ign-list-content-card&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
    </mat-expansion-panel>
    <mat-expansion-panel>
        <mat-expansion-panel-header>
            <mat-panel-title><b>
                list-content-empty-state
            </b></mat-panel-title>
            <mat-panel-description><i>Provides instructions and elements when there is nothing in the content component
            </i></mat-panel-description>
        </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>An empty state action is not required in a list component</li>
                    <li>Content should include action buttons to add content or display a message indication the content
                        is empty.</li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p>&lt;ign-list-content-empty-state&gt;&lt;/ign-list-content-empty-state&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
    </mat-expansion-panel>
    <mat-expansion-panel>
        <mat-expansion-panel-header>
            <mat-panel-title><b>
                list-content-panel
            </b></mat-panel-title>
            <mat-panel-description><i>Allocates the right hand panel for the list content view</i></mat-panel-description>
        </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>List-content-panel is required for creating a list component.</li>
                    <li>List-content-panel should be allocated to the right hand side of the list component.</li>
                    <li>List-content-panel houses the list-content-card.</li>
                    <li>List-content-panel can be shown or hidden until manually selected.</li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p>&lt;ign-list-content-panel&gt;&lt;/ign-list-content-panel&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
    </mat-expansion-panel>
    <mat-expansion-panel>
        <mat-expansion-panel-header>
            <mat-panel-title><b>
                list-content-unselected-state
            </b></mat-panel-title>
            <mat-panel-description><i>Allocated the actions and messages when content is unselected</i></mat-panel-description>
        </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>List-content-unselected-state components are optional.</li>
                    <li>List view must have clickable content if this component is in use.</li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p>&lt;ign-list-content-unselected-state&gt;&lt;/ign-list-content-unselected-state&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
    </mat-expansion-panel>
    <mat-expansion-panel>
        <mat-expansion-panel-header>
            <mat-panel-title><b>
                list-item
            </b></mat-panel-title>
            <mat-panel-description><i>Houses the items within the list component</i></mat-panel-description>
        </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>List-item is an optional component.</li>
                    <li>Acts to house all the list items in the list component.</li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p>&lt;ign-list-item&gt;&lt;/ign-list-item&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
    </mat-expansion-panel>
    <mat-expansion-panel>
        <mat-expansion-panel-header>
            <mat-panel-title><b>
                list-selection
            </b></mat-panel-title>
            <mat-panel-description><i>Houses the list view for a list component</i></mat-panel-description>
        </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>List-selection components are required for a list component.</li>
                    <li>List-selection components should be allocated to the left hand side of the list component.</li>
                    <li>Elements within the list-selection component should be concise and the content panel should
                        expand with more information when one is clicked on.</li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p>&lt;ign-list-selection&gt;&lt;/ign-list-selection&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
    </mat-expansion-panel>
    <mat-expansion-panel>
        <mat-expansion-panel-header>
            <mat-panel-title><b>
                list-selection-add
            </b></mat-panel-title>
            <mat-panel-description><i>Allows for the user to add to the list view of the list component</i></mat-panel-description>
        </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>List-selection-add components are optional.</li>
                    <li>List-selection-add components should be represented in the toolbar as an icon.</li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p>&lt;ign-list-selection-add&gt;&lt;/ign-list-selection-add&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
    </mat-expansion-panel>
    <mat-expansion-panel>
        <mat-expansion-panel-header>
            <mat-panel-title><b>
                list-selection-item
            </b></mat-panel-title>
            <mat-panel-description><i>Houses the list view items</i></mat-panel-description>
        </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>The list-selection-item component is required to house the content in the list view.</li>
                    <li>Content should be concise in nature.</li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p>&lt;ign-list-selection-item&gt;&lt;/ign-list-selection-item&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
    </mat-expansion-panel>
    <mat-expansion-panel>
        <mat-expansion-panel-header>
            <mat-panel-title><b>
                list-selection-search
            </b></mat-panel-title>
            <mat-panel-description><i>Allows for searching of the list view content</i></mat-panel-description>
        </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>List-selection search is an optional component.</li>
                    <li>List selection search should be in the form of a form, and search through the list view for key
                        words.</li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p>&lt;ign-list-selection-search&gt;&lt;/ign-list-selection-search&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
    </mat-expansion-panel>
</mat-accordion>

*** TypeScript *** 

*** ExternalTypeScript ***

*** Imports ***