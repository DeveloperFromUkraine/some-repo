*** HTML ***
# Loading Container

## Use
Loading container is a wrapper (higher level) component around your content. It will show a spinner after a
    period (right now 400ms) until the consumer declares the content loaded. Most developers needing to consume
    the loading container will simply wrap their existing on content in an ign-loading-container and let the
    loading container know when the content is loaded.

## Sample

<mat-tab-group>
    <mat-tab label="Component Sample">
        <div class="tab-height">
            <div>
                <ign-loading-container [loading]="!loaded" ariaLabel="Loading Example">
                    <!-- Empty State View -->
                    <ign-empty-state>
                        <ign-empty-state-title>This is a Title</ign-empty-state-title>
                        <ign-empty-state-description>
                            This is a description
                        </ign-empty-state-description>
                        <ign-button-group>
                            <button mat-button mat-raised-button color="accent" type="button">
                                This is a button.
                            </button>
                        </ign-button-group>
                    </ign-empty-state>
                    <!-- List Content View -->
                    <ign-list-content>
                        <ign-list-selection>
                            <ign-list-selection-item>
                            </ign-list-selection-item>
                            <ign-list-selection-add-button></ign-list-selection-add-button>
                        </ign-list-selection>
                        <ign-list-content-panel>
                            <!--State for when items exist, but user hasn't selected one yet  -->
                            <ign-list-content-unselected-state>
                            </ign-list-content-unselected-state>
                            <!--State for inspecting selected item  -->
                            <ign-list-content-card>
                            </ign-list-content-card>
                        </ign-list-content-panel>
                    </ign-list-content>
                </ign-loading-container>
            </div>
        </div></mat-tab>
    <mat-tab label="HTML"><div class="tab-height">
        <table style="width:100%">
            <p> &lt;div&gt;</p>
            <p>&nbsp; &lt;ign-loading-container [loading]="!loaded" ariaLabel="Loading Example"&gt;</p>
            <p> &nbsp;&nbsp;  &lt;!-- Empty State View --&gt;</p>
            <p> &nbsp;&nbsp;  &lt;ign-empty-state&gt;</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&lt;ign-empty-state-title&gt;This is a Title&lt;/ign-empty-state-title&gt;</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&lt;ign-empty-state-description&gt;</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This is a description</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&lt;/ign-empty-state-description&gt;</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&lt;ign-button-group&gt;</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;button mat-button mat-raised-button color="accent" type="button"&gt;</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This is a button.</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/button&gt;</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&lt;/ign-button-group&gt; </p>
            <p> &nbsp;&nbsp;  &lt;/ign-empty-state&gt;</p>
            <p>&nbsp;&nbsp;  &lt;!-- List Content View --&gt;</p>
            <p>&nbsp;&nbsp;  &lt;ign-list-content&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;ign-list-selection&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;ign-list-selection-item&gt;</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/ign-list-selection-item&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;ign-list-selection-add-button&gt;&lt;/ign-list-selection-add-button&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ign-list-selection&gt;</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&lt;ign-list-content-panel&gt;</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;!--State for when items exist, but user hasn't selected one yet  --&gt;</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;ign-list-content-unselected-state&gt; </p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/ign-list-content-unselected-state&gt; </p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;!--State for inspecting selected item  --&gt; </p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;ign-list-content-card&gt;</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/ign-list-content-card&gt;</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&lt;/ign-list-content-panel&gt;</p>
            <p> &nbsp;&nbsp;  &lt;/ign-list-content&gt;</p>
            <p> &nbsp; &lt;/ign-loading-container&gt;</p>
            <p> &lt;/div&gt;</p>
        </table>
    </div></mat-tab>
</mat-tab-group>

## Content

* The loading-container component is a wrapper. It contains whichever component is inside.
* The loading-container component should be utilized when cards, tables, and pages are loading to display to the front
end.
* The component must utilized in a way that an action will turn off the loading state by the developer consuming the
component.

## Style

* No stylistic specifications for this component.

## Accessibility

* Add a descriptive ariaLabel attribute that describes what is being loaded
* Refer to Sample HTML for an example on usage

*** TypeScript *** 

*** ExternalTypeScript ***

*** Imports ***