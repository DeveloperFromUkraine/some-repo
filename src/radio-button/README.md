## Use
    All radio-buttons with the same name comprise a set from which only one may be selected at a time.

    ### Radio-button label
        -The radio-button label is provided as the content to the <mat-radio-button> element. The label can be positioned before or after the radio-button by setting the labelPosition property    to 'before' or 'after'.
        -If you don't want the label to appear next to the radio-button, you can use aria-label or aria-labelledby to specify an appropriate label.

    ### Radio groups
        -Radio-buttons should typically be placed inside of an <mat-radio-group> unless the DOM structure would make that impossible (e.g., radio-buttons inside of table cells). The radio-group   has a value property that reflects the currently selected radio-button inside of the group.
        -Individual radio-buttons inside of a radio-group will inherit the name of the group.

    ### Use with @angular/forms
        - <mat-radio-group> is compatible with @angular/forms and supports both FormsModule and ReactiveFormsModule.

    ### Accessibility
        -The <mat-radio-button> uses an internal <input type="radio"> to provide an accessible experience. This internal radio button receives focus and is automatically labelled by the text content of the <mat-radio-button> element.
        - Radio button groups should should be given a meaningful label via aria-label or aria-labelledby.

## API
    ### Selector MatRadioButton
        * mat-radio-button
    
    ### Exported As MatRadioButton
        * matRadioButton

    ### Properties MatRadioButton
        * @Input('aria-describedby') ariaDescribedby: string
            * The 'aria-describedby' attribute is read after the element's label and field type.

        * @Input('aria-label') ariaLabel: string
            * Used to set the 'aria-label' attribute on the underlying input element.

        * @Input('aria-labelledby') ariaLabelledby: string
            * The 'aria-labelledby' attribute takes precedence as the element's text alternative.

        * @Input() checked: boolean
            * Whether this radio button is checked.

        * @Input() color: ThemePalette
            * Theme color palette for the component.

        * @Input() disableRipple: boolean
            * Whether ripples are disabled.

        * @Input() disabled: boolean
            * Whether the radio button is disabled.

        * @Input() id: string
            * The unique ID for the radio button.

        * @Input() labelPosition: 'before' | 'after'
            * Whether the label should appear after or before the radio button. Defaults to 'after'

        * @Input() name: string
            * Analog to HTML 'name' attribute used to group radios for unique selection.

        * @Input() required: boolean
            * Whether the radio button is required.

        * @Input() value: any
            * The value of this radio button.

        * @Output() change: EventEmitter<MatRadioChange>
            * Event emitted when the checked state of this radio button changes. Change events are only emitted when the value changes due to user interaction with the radio button (the same behavior as <input type-"radio">).

        * inputId: string
            * ID of the native input element inside <mat-radio-button>

        * radioGroup: MatRadioGroup
            * The parent radio group. May or may not be present.

    ### Methods MatRadioButton
        * focus()
            * Focuses the radio button.

## Implementation HTML
    <mat-radio-group id="radioButtonList" class="example-radio-group" [(ngModel)]                   ="rowOfRadioButtons" aria-label="Sample Radio Button List">
        <mat-radio-button class="example-radio-button" \*ngFor="let button of buttons" [value]="button" aria-describedby="radioButtonList">
            {{button}} 
    </mat-radio-button>

## Implementation TS
    rowOfRadioButtons: string;

    buttons = [
        'I AM A BUTTON',
    ];