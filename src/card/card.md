*** HTML ***
# Cards

## Use
A card is a container for content. Cards are static in size, and should be used to organize data in a fixed position
    on the page where the user wishes to avoid overlap of components and information. 
See [Material Design Components](https://material.io/guidelines/components/cards.html) and
    [Angular Material Cards](https://material.angular.io/components/card/overview).

## Sample
<mat-tab-group>
    <mat-tab label="Component Sample"><div class="tab-height">
        <mat-card>
            <ign-card-main>
                <ign-card-header-container><ign-card-toolbar>
                    <ign-card-title>This is a Card Title Component.</ign-card-title>
                    <button mat-icon-button> <mat-icon style="color:lightgray" class="material-icons" aria-hidden="false" aria-label="check">check</mat-icon></button>
                    <button mat-icon-button> <mat-icon style="color:lightgray" class="material-icons" aria-hidden="false" aria-label="menu">menu</mat-icon></button>
                    <button mat-icon-button> <mat-icon style="color:lightgray" class="material-icons" aria-hidden="false" aria-label="more">more</mat-icon></button>
                </ign-card-toolbar></ign-card-header-container>
                <ign-card-section>
                    <ign-card-header-container> <ign-card-section-title>Here's a Card Section Title Component.</ign-card-section-title></ign-card-header-container>
                    <ign-card-section-subtitle>Here's a Card Section Subtitle Component.</ign-card-section-subtitle>
                    <ign-field
                            [label]="field">
                        This is the field.
                        It contains information.
                    </ign-field>
                    <ign-field
                            [label]="field">
                        This is another field.
                        It has more information.
                    </ign-field>
                </ign-card-section>
                <ign-card-actions>
                    <button
                            mat-raised-button
                            mat-button
                            type="submit"
                            color="accent"
                    >
                        Save Card Actions Component
                    </button>
                    <button
                            mat-button
                            type="button"> Cancel Card Actions Component</button>
                </ign-card-actions>
            </ign-card-main>
        </mat-card>
    </div></mat-tab>
    <mat-tab label="HTML"><div class="tab-height">
        <table style="width:100%">
            <p> &lt;mat-card&gt;</p>
            <p>&nbsp; &lt;ign-card-main&gt;</p>
            <p>&nbsp;&nbsp;&lt;ign-card-header-container&gt;&lt;ign-card-toolbar&gt;</p>
            <p>&nbsp;&nbsp;&nbsp; &lt;ign-card-title&gt;This is a Card Title Component.&lt;/ign-card-title&gt;</p>
            <p>&nbsp;&nbsp;&nbsp; &lt;button mat-icon-button&gt; &lt;mat-icon style="color:lightgray" class="material-icons"&gt;check&lt;/mat-icon&gt;&lt;/button&gt;</p>
            <p>&nbsp;&nbsp;&nbsp; &lt;button mat-icon-button&gt; &lt;mat-icon style="color:lightgray" class="material-icons"&gt;menu&lt;/mat-icon&gt;&lt;/button&gt;</p>
            <p>&nbsp;&nbsp;&nbsp; &lt;button mat-icon-button&gt; &lt;mat-icon style="color:lightgray" class="material-icons"&gt;more&lt;/mat-icon&gt;&lt;/button&gt;</p>
            <p>&nbsp;&nbsp; &lt;/ign-card-toolbar&gt;&lt;/ign-card-header-container&gt;</p>
            <p>&nbsp;&nbsp;&nbsp; &lt;ign-card-section&gt;</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp; &lt;ign-card-header-container&gt; &lt;ign-card-section-title&gt;Here's a Card Section Title Component.&lt;/ign-card-section-title&gt;&lt;/ign-card-header-container&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;ign-card-section-subtitle&gt;Here's a Card Section Subtitle Component.&lt;/ign-card-section-subtitle&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;ign-field</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[label]="field"&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is the field.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It contains information.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/ign-field&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;ign-field</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[label]="field"&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is another field.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It has more information.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/ign-field&gt;</p>
            <p>&nbsp;&nbsp;&nbsp; &lt;/ign-card-section&gt;</p>
            <p>&nbsp;&nbsp;&nbsp; &lt;ign-card-actions&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;button</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; mat-button</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp; type="button"&gt; Save Card Actions Component&lt;/button&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp; &lt;button</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; mat-button</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp; type="button"&gt; Cancel Card Actions Component&lt;/button&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&lt;/ign-card-actions&gt;</p>
            <p>&nbsp; &lt;/ign-card-main&gt;</p>
            <p>&lt;/mat-card&gt;</p>
        </table>
    </div></mat-tab>
</mat-tab-group>

## Content
* Cards can be used to display a wide variety of content.
* Content should be separated by context.
* The following components are available for usage with and of cards:
    * card-actions
    * card-header-container
    * card-main
    * card-section
    * card-section-title
    * card-section-subtitle
    * card-subtitle
    * card-title
    * card-toolbar


## Style
* Cards should be placed evenly spaced around the page in respect to other cards.
* The hierarchy of card components should be as follows (in descending order):
    * mat-card
        * card-main
            * card-header-container
                * card-toolbar
                    * card-title
                    * card-subtitle
            * card-section
                * card-header-container
                    * card-section-title
                * card-section-subtitle
            * card-actions
* Variations to the above may be made to fulfill the purposes of the card, where some components may not be needed.
* Stylistic specification per Card component may be found in the respective expansion panel below.

## Accessibility

* Add aria-hidden="false" and a descriptive aria-label for each of the action icons used within the card
* Refer to the Sample HTML for an example

## Card Components

<mat-accordion id="accordion">
    <mat-expansion-panel>
        <mat-expansion-panel-header>
            <mat-panel-title>
                mat-card
            </mat-panel-title>
            <mat-panel-description><i>The mat-card component houses the card and all its contents.</i></mat-panel-description>
        </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>Material Card components must be used to implement cards.</li>
                    <li>Material Card components should be spaced within 4px-72px of other card-container componenets,
                        dependent on screen resolution and incrementing in multiples of four.</li>
                    <li>Material Card components are housing units- they do not have a physical representation.</li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p> &lt;mat-card&gt;&lt;/mat-card&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
    </mat-expansion-panel>
    <mat-expansion-panel>
        <mat-expansion-panel-header>
            <mat-panel-title><b>
                card-actions
            </b></mat-panel-title>
            <mat-panel-description><i>The card-actions component allows for save and cancel buttons that complete a given action on a given page via the card.</i></mat-panel-description>
        </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>Card-actions components should be displayed in the lower left hand corner of the card.</li>
                    <li>Card-actions components adjacent and equally spaced to one another.</li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p>&lt;ign-card-actions&gt; &lt;/ign-card-actions&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
        </mat-expansion-panel>
        <mat-expansion-panel>
            <mat-expansion-panel-header>
                <mat-panel-title><b>
                    card-header-container
                </b></mat-panel-title>
                <mat-panel-description><i>The card-container-header component houses the header of the card.</i></mat-panel-description>
            </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>Card-header-container components house card-toolbar, card-title, and card-subtitle components. </li>
                    <li>Card-header-container components do not have a physical representation, rather they are constrained
                        based on card dimensions.</li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p>&lt;ign-card-header-container&gt;&lt;/ign-card-header-container&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
        </mat-expansion-panel>
        <mat-expansion-panel>
            <mat-expansion-panel-header>
                <mat-panel-title><b>
                    card-main
                </b></mat-panel-title>
                <mat-panel-description><i>The card-main component houses the card content, allowing for uniform formatting of the card.</i></mat-panel-description>
            </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>Card-main components stylize and house the cards' components.</li>
                    <li>Card-main components encapsulate card-section and all its subcomponents, card-header-container
                        and all its sub-components, and card-actions components.  </li>
                    <li>Card-main components should be spaced from the card container between 16-24px, dependent on
                        display resolution.</li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p>&lt;ign-card-main&gt;&lt;/ign-card-main&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
        </mat-expansion-panel>
        <mat-expansion-panel>
            <mat-expansion-panel-header>
                <mat-panel-title><b>
                    card-section
                </b></mat-panel-title>
                <mat-panel-description>The card-section component houses different sections in the card, to uniformly distribute contents within the respective sections.</mat-panel-description>
            </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>Card-section components house field components and information pertaining to the content of
                        the card .</li>
                    <li>Card-section components should be separated 48px lengthwise from one another, regardless of
                        display resolution. </li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p>&lt;ign-card-section&gt;&lt;/ign-card-section&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
    </mat-expansion-panel>
    <mat-expansion-panel>
        <mat-expansion-panel-header>
            <mat-panel-title><b>
                card-section-subtitle
            </b></mat-panel-title>
            <mat-panel-description>The card-section-subtitle component houses the subtitle for the card-section component.</mat-panel-description>
        </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>Card-section-subtitle components represent subtitles to the card-section-title component.</li>
                    <li>Content of the card-section-subtitle component should not be treated as a section title, and should
                        instead be a brief descriptor of additional information not already declared within the
                        card-section-title component.</li>
                    <li>Card-section-subtitle component font should be 18px large, regardless of display resolution.</li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p>&lt;ign-card-section-subtitle&gt;&lt;/ign-card-section-subtitle&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
        </mat-expansion-panel>
        <mat-expansion-panel>
            <mat-expansion-panel-header>
                <mat-panel-title><b>
                    card-section-title
                </b></mat-panel-title>
                <mat-panel-description>The card-section-subtitle component houses the title for the card-section component.</mat-panel-description>
            </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>Card-section-title components display titles for the card-section component.</li>
                    <li>Content of the card-section-title component does not represent the title of the card, and should
                        instead represent summarized descriptors of given section content. </li>
                    <li>Card-section-title component font should be 20px large, regardless of display resolution.</li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p>&lt;ign-card-section-title&gt;&lt;/ign-card-section-title&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
        </mat-expansion-panel>
        <mat-expansion-panel>
            <mat-expansion-panel-header>
                <mat-panel-title><b>
                    card-subtitle
                </b></mat-panel-title>
                <mat-panel-description>The card-subtitle component houses the subtitle for the card-main component.</mat-panel-description>
            </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>Card-subtitle components display subtitle card-main component.</li>
                    <li>Card-subtitle components are housed within the card-header-container component.</li>
                    <li>Content of the card-subtitle component does not represent the title of the card-main component,
                        but rather additional, summarized information pertaining to the card-title component. </li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p>&lt;ign-card-subtitle&gt;&lt;/ign-card-subtitle&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
        </mat-expansion-panel>
        <mat-expansion-panel>
            <mat-expansion-panel-header>
                <mat-panel-title><b>
                    card-title
                </b></mat-panel-title>
                <mat-panel-description>The card-title component houses the title for the card-main component.</mat-panel-description>
            </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>Card-title components display the title card-main component.</li>
                    <li>Card-title components are housed within the card-header-container component.</li>
                    <li>Card-title components should contain of summary of information in regards to all
                        card-section components, and card-subtitle components.</li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p>&lt;ign-card-title&gt;&lt;/ign-card-title&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
        </mat-expansion-panel>
        <mat-expansion-panel>
            <mat-expansion-panel-header>
                <mat-panel-title><b>
                    card-toolbar
                </b></mat-panel-title>
                <mat-panel-description>The card-toolbar component houses the toolbar for the card-main component.</mat-panel-description>
            </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>Card-toolbar components display card-title and card-subtitle components, as well as navigational
                        and information buttons referenced within the card-main component.</li>
                    <li>Card-toolbar components are housed within the card-main component.</li>
                    <li>Card-toolbar components' widths are constrained by the card-main dimensions, and have a height of 28px.</li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p>&lt;ign-card-toolbar&gt;&lt;/ign-card-toolbar&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
    </mat-expansion-panel>
</mat-accordion>

*** TypeScript *** 

*** ExternalTypeScript ***

*** Imports ***