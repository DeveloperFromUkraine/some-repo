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