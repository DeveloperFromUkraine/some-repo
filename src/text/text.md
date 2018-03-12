*** HTML ***
# Text

## Use
The text component and its subcomponents purposes is to display list items composed of primary and/or
    secondary/tertiary text and may include routes. 

## Sample
<mat-tab-group>
    <mat-tab label="Component Sample">
        <div class="tab-height">
            <ign-page>
                <ign-card-container>
                    <ign-card-main>
                        <ign-card-title>
                            The card contains a two text-list-item components.
                        </ign-card-title>
                        <ign-nav-list>
                            <ign-text-list-item
                                    primaryText="I'm one text-list-item."
                                    secondaryText="You can click me.">
                            </ign-text-list-item>
                            <ign-text-list-item
                                    primaryText="I'm another text-list-item."
                                    secondaryText="I'm also clickable.">
                            </ign-text-list-item>
                        </ign-nav-list>
                    </ign-card-main>
                </ign-card-container>
            </ign-page>
        </div></mat-tab>
    <mat-tab label="HTML"><div class="tab-height">
        <table style="width:100%">
            <p> &lt;ign-page&gt;</p>
            <p>&nbsp; &lt;ign-card-container&gt;</p>
            <p> &nbsp;&nbsp;  &lt;ign-card-main&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;ign-card-title&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The card contains a two text-list-item components.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ign-card-title&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;ign-nav-list&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;ign-text-list-item</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  primaryText="I'm one text-list-item."</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  secondaryText="You can click me."&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ign-text-list-item&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;ign-text-list-item</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;primaryText="I'm another text-list-item."</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;secondaryText="I'm also clickable."&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/ign-text-list-item&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ign-nav-list&gt;</p>
            <p>&nbsp;&nbsp;  &lt;/ign-card-main&gt;</p>
            <p>&nbsp; &lt;/ign-card-container&gt;</p>
            <p> &lt;/ign-page&gt;
        </table>
    </div></mat-tab>
</mat-tab-group>


## Content
The text component's content is determined by the implementation of the developer. However, the developer should take
note of the list format of the text and avoid placing too much information or content in the text components. Text
should be concise.


## Style
* If no primary text is provided, secondary text will be displayed as primary text.
* If tertiary text is also provided in this case, it will be displayed as secondary text.
* Stylistic specification per Text component may be found in the respective expansion panel below.


## Card Components

<mat-accordion>
    <mat-expansion-panel>
        <mat-expansion-panel-header>
            <mat-panel-title><b>
                text-list-item
            </b></mat-panel-title>
            <mat-panel-description><i>Allows for the user to select an textual item from a list and
                perform an action. </i></mat-panel-description>
        </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>Text list items should be short and concise</li>
                    <li>Text list items should be references to other pages or used as options in multi-selection content.</li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p>&lt;text-list-item&gt; &lt;/text-list-item&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
        </mat-expansion-panel>
        <mat-expansion-panel>
            <mat-expansion-panel-header>
                <mat-panel-title><b>
                    list-item-primary-text
                </b></mat-panel-title>
                <mat-panel-description><i>Allows for a differentiation between primary and secondary text in a list of elements.</i></mat-panel-description>
            </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>List-item-primary-text is an optional component.</li>
                    <li>List-item-primary-text should display the main information.</li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p> &lt;ign-list-item-primary-text&gt;&lt;/ign-list-item-primary-text&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
        </mat-expansion-panel>
        <mat-expansion-panel>
            <mat-expansion-panel-header>
                <mat-panel-title><b>
                    list-item-secondary-text
                </b></mat-panel-title>
                <mat-panel-description><i>Allows for a differentiation between primary and secondary text in a list of elements.</i></mat-panel-description>
            </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>List-item-secondary-text is an optional component, but should only be utilized if there is
                        a primary text component in use.</li>
                    <li>List-item-secondary-text should display the a more specific set of information from the primary
                        text component.</li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p>&lt;ign-list-item-secondary-text&gt;&lt;/ign-list-item-secondary-text&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
    </mat-expansion-panel>
</mat-accordion>

*** TypeScript *** 

*** ExternalTypeScript ***

*** Imports ***