## Use
    ### Implementation
        - Card titles are used to briefly describe the card. Examples include:
            - Employee Name
            - Topic of card content
    
    ### Card Toolbar
        - Card titles belong in the card toolbar, which acts as a card header.
        - Card titles are usable outside of the card toolbar, but will not have the same styling.

    ### Alignment
        - Card titles are left aligned at the top of the card.

    ### Accessibility
        - Card titles have a tab index -1 by default, due to the accessibility directive. 


## API 
  ### Selector
    * ign-card-title
  
  ### Export As
    * CardTitleComponent


## Implementation HTML
    <mat-card>
        <ign-card-main>
            <ign-card-title></ign-card-title>
        </ign-card-main>
    </mat-card>


## Implementation TS
    None