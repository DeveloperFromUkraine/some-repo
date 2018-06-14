## Use
    <mat-card> is a content container for text, photos, and actions in the context of a single subject

    ### Material Card
      A card is a container for content. Cards are static in size, and should be used to organize data in a fixed position on the page where the user wishes to avoid overlap of components and information. See [Material    Design Components](https://material.io/guidelines/components/cards.html) and
      [Angular Material Cards](https://material.angular.io/components/card/overview).

    ### Accessibility
        - Add aria-hidden="false" and a descriptive aria-label for each of the action icons used within the card
        - Refer to the Sample HTML for an example


## API
    ### Selector
        * mat-card
  
    ### Export As
        * matCard


## Implementation HTML
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


## Implementation TS 
    None
