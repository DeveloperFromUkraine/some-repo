## Use
    This component displays a view field, consisting of a label and a value. Fields are not inline styled by default. A label must be provided. The contents of the tag will be displayed as the value.

    ### Editable Fields
        * Editable fields allow for functionality to edit the field.
        * Editable inline fields are similar, but maintain inline styling.
    
    ### Inline Fields
        * Fields that are inline.
        * Inline fields can be editable.

    ### Implementation
        * The contents of the tag will be displayed as the value.
        * Fields should not be used in place of input fields (such as text fields). 
        * Do
            Use when a set label and certain requirements are specified.
        * Don't
            Use for free form user input. 
        
    ### Accessibility
        * For editable field and editable inline field components, a default aria label has been added for the      edit button.
        * For a more descriptive label, add an ariaBtnLabel attribute and provide a more descriptive value.
        * Refer to the sample html in the accordion below for examples of usage.


# Inline Field Component
This component is similar to the field above but slightly different look and feel. Label will appear first followed by the text value on the same row.

## Usage
A label must be provided. The contents of the tag will be displayed as the value. Example usage:


# Editable Field Component
This component is similar to the field component but also includes an edit button that emits an event that can be subscribed to.

## Usage
A label must be provided. The contents of the tag will be displayed as the value.
An editIcon can be optionaly provided, if none passed the button will display mat-icon mode_edit as default. Example usage:

# Editable Inline Field Component
This component is similar to the editable field above but slightly different look and feel. Label will appear first followed by the text value followed by the edit button on the same row.


## API
   ### Selector Field
        * ign-field

    ### Selector InlineField
        * ign-field-inline
    
    ### Selector EditableField
        * ign-editable-field
    
    ### Selector EditableInlineField
        * ign-editable-field-inline
    
    ### Export As Field
        * FieldComponent

    ### Export As InlineField
        * FieldInlineComponent

    ### Export As EditableField
        * EditableFieldComponent

    ### Export As EditableInlineField
        * EditableFieldInlineComponent

    ### Field Component Properties
        * @Input() label: string 
            * Label for the content provided via ng-content

    ### Inline Field Component Properties
        * @Input() ariaBtnLabel: string 
            * Used to provide accessibility for the button
        * @Input() editIcon: string                
            * The icon to be used in the button
            * Defaults to 'mode_edit'
        * @Input() da: string               
            * da for the editable field
        * @Input() daButton: number[]            
            * da for the button
        * @Output() onIconClick: EventEmitter<any>                    
            * Event emitter for the button click

    ### Editable Field Component Properties
        None

    ### Editable Inline Field Component Properties
        None


## Implementation HTML
    ### Editable Field Component
        <ign-editable-field label="The Answer" (onIconClick)="myFn($event)">42</ign-field>

    ### Inline Field Component
        <ign-field-inline label="The Answer">42</ign-field-inline>

    ### Field Component
        <ign-field label="The Answer">42</ign-field>

    ### Editable Inline Field Component
        <ign-editable-field-inline label="The Answer" editIcon="home" (onIconClick)="myFn($event)">42</ign-field-inline>


## Implementation TS
    None