## Use
    Card subtitles are used below card titles, and are meant as specifiers to the card title.

    ### Card Title
        - Card subtitles should be used when card titles require more descriptive information
        - Card subtitles should not be used in place of card titles.
    
    ### Card Toolbar
        - Card subtitles should be placed below the card title in the card toolbar component.

    ### Accessibility
        - Card subtitles have a tab index -1 by default, due to the accessibility directive.

## API
  ### Selector
    * ign-card-subtitle
  
  ### Export As
    * CardSubtitleComponent

## Implementation HTML
    <mat-card>
        <ign-card-main>
            <ign-card-subtitle></ign-card-subtitle>
        </ign-card-main>
    </mat-card>

## Implementation TS
    None