## Use
    Card section subtitles are used below card section titles, and are meant as specifiers to the card section title.

    ### Card Section Title
        - Card section subtitles should be used when card section titles require more descriptive information
        - Card section subtitles should not be used in place of card section titles.

    ### Card Subtitle
        - Card section subtitles are not substitutes and should not be substituted by card subtitles. 
    
    ### Card Section
        - Card section subtitles should be placed below the card section title in the card toolbar component.

    ### Accessibility
        - Card section subtitles do not have a tab index -1 by default.


## API
  ### Selector
    * ign-card-section-subtitle
  
  ### Export As
    * CardSectionSubtitleComponent


## Implementation HTML
    <mat-card>
        <ign-card-main>
            <ign-card-section>
                <ign-card-section-subtitle></ign-card-section-subtitle>
            </ign-card-section>
        </ign-card-main>
    </mat-card>


## Implementation TS
    None