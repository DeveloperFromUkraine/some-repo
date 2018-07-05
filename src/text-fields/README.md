## Use
    - Text fields (aka Inputs) let users enter edit and select text including names currency email percents phone   numbers urls and zip codes. Fields may be tied to specific formatting and /or masking. see [Material Design - Text fields](https://material.io/guidelines/components/text-fields.html) and [Angular Material Inputs.]q      (https://material.angular.io/components/input/overview) 
    - Text fields typically reside in forms but can appear in other places like dialog boxes and search.

    ### <input> and <textarea> attributes
        - All of the attributes that can be used with normal <input> and <textarea> elements can be used on         elements inside <mat-form-field> as well. This includes Angular directives such as ngModel and            formControl.
        - The only limitation is that the type attribute can only be one of the values supported by matInput.

    ### Supported <input> types
        - The following input types can be used with matInput:
            color
            date
            datetime-local
            email
            month
            number
            password
            search
            tel
            text
            time
            url
            week

    ###  Form field features
        - There are a number of <mat-form-field> features that can be used with any <input matInput> or <textarea matInput>. These include error messages, hint text, prefix & suffix, and theming. For additional information about these features, see the form field documentation.

    ### Placeholder
        The placeholder is text shown when the <mat-form-field> label is floating but the input is empty. It is used to give the user an additional hint about what they should type in the input. The placeholder can be specified by setting the placeholder attribute on the <input> or <textarea> element. In some cases that <mat-form-field> may use the placeholder as the label (see the form field label documentation).   

    ### Implementation
        - Do
            * Use a width directive to adjust width to fit anticipated input 
            * Use brief helper text in place of long labels
        - Don't
            * Don't use long labels; progressively disclose more info when further explanation is necessary

    ### Accessibility
        -The matInput directive works with native <input> to provide an accessible experience.
        - If the containing <mat-form-field> has a label it will automatically be used as the aria-label for the    <input>. However, if there's no label specified in the form field, aria-label, aria-labelledby or         <label for=...> should be added.
        - Any mat-error and mat-hint are automatically added to the input's aria-describedby list, and              aria-invalid is automatically updated based on the input's validity state.


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