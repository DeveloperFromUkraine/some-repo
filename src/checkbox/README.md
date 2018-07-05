## Use
    Checkboxes allow the selection of multiple options from a set.They are a subset of Selection Controls. <mat-checkbox> provides the same functionality as a native <input type="checkbox"> enhanced with Material Design styling and animations. See [Angular Material Checkboxes(https://material.angular.io/components/checkbox/overview).

    ### Implementation
        Implement checkboxes with an out of the box Angular Material component. Within Sketch, checkboxes are       presented in horizontal and vertical layouts.
            - Horizontal group: options should be separated by 16px of space on the right.
            - Vertical group: options should be separated by 16px of space below.
    
    ### Do and Don't
        - Do
            - Use if there are multiple options presented for selection.

        - Don't 
            - Don't use for single options, use a Switch instead.

    ### Checkbox label
        -The checkbox label is provided as the content to the <mat-checkbox> element. The label can be positioned   before or after the checkbox by setting the labelPosition property to 'before' or 'after'.
        -If you don't want the label to appear next to the checkbox, you can use aria-label or aria-labelledby to   specify an appropriate label.

    ### Use with @angular/forms
        - <mat-checkbox> is compatible with @angular/forms and supports both FormsModule and ReactiveFormsModule.

    ### Indeterminate state
        - <mat-checkbox> supports an indeterminate state, similar to the native <input type="checkbox">. While      the indeterminate property of the checkbox is true, it will render as indeterminate regardless of the     checked value. Any interaction with the checkbox by a user (i.e., clicking) will remove the               indeterminate state.

    ### Click action config
        - When user clicks on the mat-checkbox, the default behavior is toggle checked value and set                indeterminate to false. This behavior can be customized by providing a new value of                       MAT_CHECKBOX_CLICK_ACTION to the checkbox.
        - The possible values are:
            -noop
                - Do not change the checked value or indeterminate value. Developers have the power to implement customized click actions.
            - check
                - Toggle checked value of the checkbox, ignore indeterminate value. If the checkbox is in indeterminate state, the checkbox will display as an indeterminate checkbox regardless the checked value.
            - check-indeterminate
                - Default behavior of mat-checkbox. Always set indeterminate to false when user click on the mat-checkbox. This matches the behavior of native <input type="checkbox">.

    ### Theming
        The color of a <mat-checkbox> can be changed by using the color property. By default, checkboxes use the theme's accent color. This can be changed to 'primary' or 'warn'.

    ### Style
        - Horizontal group: options should be separated by 16px of space on the right
        - Vertical group: options should be separated by 16px of space below
        - All Selection Controls use Accent color to indicate the selected state.
        
    ### Accessibility
        - The <mat-checkbox> uses an internal <input type="checkbox"> to provide an accessible experience. This internal checkbox receives focus and is automatically labelled by the text content of the <mat-checkbox> element.
        - Checkboxes without text or labels should be given a meaningful label via aria-label or aria-labelledby.
        - Assign a unique ID within the enclosing div for the checkboxes
        - Assign a descriptive aria-label within the enclosing div for the checkboxes
        - Reference that same ID within each checkbox using the aria-describedby tag
        - Refer to Sample HTML for an example


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