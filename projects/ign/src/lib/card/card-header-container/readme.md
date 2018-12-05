## Use
  Card header container serves as a container for card headers. It will allow for distinction between the title/subtitle and the body of the card

  ### Card Toolbar
    - Card header container components should contain only the card toolbar. 

  ### Card Main
    - Card header should be placed above the card main component.
  
  ### Accessibility
    - Accessibility should be maintained by the component within the card header container component. 

    
## API
  ### Selector
    * ign-card-header-container
  
  ### Export As
    * CardHeaderContainerComponent


## Implementation HTML 
  <mat-card>
    <ign-card-main>
      <ign-card-header-container>
        <ign-card-title></ign-card-title>
        <ign-card-subtitle></ign-card-subtitle>
      </ign-card-header-container>
    </ign-card-main>
  </mat-card>


## Implementation TS
  None
