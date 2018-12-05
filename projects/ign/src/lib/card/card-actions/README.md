## Use
     Card action differentiates different parts of the card. Because cards are entry points to more detailed information, they should contain a limited number of actions.

    ### Types
        - The primary action area of a card is typically the card itself. Often cards are one large touch target    to a detail screen on a subject.
        -Supplemental actions are represented by icons, text, and UI controls on cards. They are typically placed   at the bottom of the card.

    ## Multiple Actions
        - For more than two supplemental actions, use an overflow menu instead.
        - Overflow menus contain related actions. They are typically placed in the upper-right or lower-right       corner of a card.


## API
  ### Selector
    * ign-card-actions
  
  ### Export As
    * CardActionsComponent


## Implementation HTML
    <mat-card>
        <ign-card-main>
            <ign-card-actions></ign-card-actions>
        </ign-card-main>
    </mat-card>


## Implementation TS
    None