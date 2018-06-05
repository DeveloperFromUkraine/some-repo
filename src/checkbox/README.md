## API
    ### Selector
        * mat-checkbox
    
    ### Export As
        * matCheckbox
        
    ### Properties
        * @Input('aria-label') ariaLabel: string
            * Attached to the aria-label attribute of the host element. In most cases, arial-labelledby will take precedence so this may be omitted.

        * @Input('aria-labelledby') ariaLabelledby: string | null
            * Users can specify the aria-labelledby attribute which will be forwarded to the input element

        * @Input() checked: boolean
            * Whether the checkbox is checked.

        * @Input() color: ThemePalette
            * Theme color palette for the component.

        * @Input() disableRipple: boolean
            * Whether ripples are disabled.

        * @Input() disabled: any
            * Whether the checkbox is disabled. This fully overrides the implementation provided by          mixinDisabled, but the mixin is still required because mixinTabIndex requires it.

        * @Input() id: string
            * A unique id for the checkbox input. If none is supplied, it will be auto-generated.

        * @Input() indeterminate: boolean
            * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to represent a checkbox with three states, e.g. a checkbox that represents a nested list of checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately set to false.

        * @Input() labelPosition: 'before' | 'after'
            * Whether the label should appear after or before the checkbox. Defaults to 'after'

        * @Input() name: string | null
            * Name value will be applied to the input element if present

        * @Input() required: boolean
            * Whether the checkbox is required.

        * @Input() value: string
            * The value attribute of the native input element

        * @Output() change: EventEmitter<MatCheckboxChange>
            * Event emitted when the checkbox's checked value changes.

        * @Output() indeterminateChange: EventEmitter<boolean>
            * Event emitted when the checkbox's indeterminate value changes.

        * inputId: string
            Returns the unique id for the visual hidden input.

        * ripple: MatRipple
            Reference to the ripple instance of the checkbox.

## Implementation HTML
    <div id="checkboxList" aria-label="Checkbox List">
        <mat-checkbox aria-describedby="checkboxList">Check me!</mat-checkbox> 
        <mat-checkbox aria-describedby="checkboxList">Check me too!</mat-checkbox> 
    </div>

## Implementation TS
    None