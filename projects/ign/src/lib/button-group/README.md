## Use
    The button group component is utilized as a container for groups of buttons. The button group provides 
    styling and horiztonal formatting for larger groups of buttons and allows for responsive equality of the
    individual buttons.

    ### Implementation
        -Buttons groups should be used when there are multiple or contrasting button options for:
             -navigation
             -submission
             -cancellation
            of actions.

    ### Style
        - Button groups should be located in upper and lower corners of other containers, such as cards or pages.
        - Button groups should contain multiple buttons.

    ### Accessibility
        - Button groups should be given a meaningful and descriptive aria-label.
        - See example for implementation. 


## API
    ### Selector
        * ign-button-group
    
    ### Export As
        * ButtonGroupComponent


## Implementation HTML 
    <ign-button-group aria-label="Button Group">
        <button
            mat-raised-button
            mat-button
            type="submit"
            color="accent">
            Button 1
        </button>
        <button
            mat-raised-button
            mat-button
            type="submit"
            color="accent">
            Button 2
        </button>
        <button
            mat-raised-button
            mat-button
            type="submit"
            color="accent">
            Button 3
        </button>
        <button
            mat-raised-button
            mat-button
            type="submit"
            color="accent">
            Button 4
        </button>
    </ign-button-group>


## Implementation TS
    None