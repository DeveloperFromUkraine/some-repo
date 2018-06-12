## API
    ### Selector
        * input[matInput] textarea[matInput]

    ### Export As
        * matInput

    ### Properties
        * @Input() errorStateMatcher: ErrorStateMatcher
            * An object used to control when error messages are shown.

        * @Input() readonly: boolean
            * Whether the element is readonly.

        * @Input() type: string
            * Input type of the element.

        * errorState: boolean
            * Whether the control is in an error state.
    
    ### Methods
        * focus()
        * updateErrorState()

## Implementation HTML
    <mat-form-field>
        <input matInput placeholder="Input">
    </mat-form-field>

## Implementation TS
    None