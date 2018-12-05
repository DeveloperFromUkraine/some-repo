## Use
  Card sections are used to diffentiate context different content within a card component.

  ### Card Main
   - Card sections should be implemented within card main.

  ### Implementation
    - Card sections contain card section titles.
    - Card sections also contain card section subtitles.
    - Card sections are able to be filled with any content. 

  ### Accessibility
    - Card sections do not have a tab index of -1 by default.


## API 
  ### Selector
    * ign-card-section
  
  ### Export As
    * CardSectionComponent


## Implementation HTML
    <mat-card>
        <ign-card-main>
            <ign-card-section>
            </ign-card-section>
        </ign-card-main>
    </mat-card>


## Implementation TS
    None