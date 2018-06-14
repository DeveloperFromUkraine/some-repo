## Use
    Card main is a main container for the card component. 

    ### Mat Card
        - Card main is located within the mat card component.

    ### Card Header Container   
        - Card header container should be placed aboved card main.
        - Card main is not located within card header.
        - Card main should not contain components within the card header container except for:
            - card title
            - card subtitle

    ### Sections
        - Card main should have one or multiple sections.

    ### Accessibility
        - Accessibility should be handled within the component of card main. 


## API
    ### Selector
        * ign-card-main
  
    ### Export As
        * CardMainComponent


## Implementation HTML
    <mat-card>
        <ign-card-main>
        </ign-card-main>
    </mat-card>


## Implementation TS
    None