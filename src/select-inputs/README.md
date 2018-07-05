## Use
    - <mat-select> is a form control for selecting a value from a set of options, similar to the native <select>    element. You can read more about selects in the Material Design spec. It is designed to work inside of a      <mat-form-field> element.
    - To add options to the select, add <mat-option> elements to the <mat-select>. Each <mat-option> has a value    property that can be used to set the value that will be selected if the user chooses this option. The         content of the <mat-option> is what will be shown to the user.
    - See [Angular Select Inputs](https://material.angular.io/components/select/overview). 

    ### Getting and Setting Select Values
        - The <mat-select> supports 2-way binding to the value property without the need for Angular forms.
        - The <mat-select> also supports all of the form directives from the core FormsModule (NgModel) and         ReactiveFormsModule (FormControl, FormGroup, etc.) As with native <select>, <mat-select> also supports    a compareWith function. (Additional information about using a custom compareWith function can be found    in the Angular forms documentation).

    ### Form Field Feature
        - There are a number of <mat-form-field> features that can be used with any <mat-select>. These include     error messages, hint text, prefix & suffix, and theming. For additional information about these           features, see the form field documentation.

    ### Setting Static Placeholder
        - The placeholder is text shown when the <mat-form-field> label is floating but the <mat-select> is         empty. It is used to give the user an additional hint about the value they should select. The             placeholder can be specified by setting the placeholder attribute on the <mat-select> element. In some    cases that <mat-form-field> may use the placeholder as the label (see the form field label                documentation).

    ### Content
        -Do
            - Use Select inputs when seeing all available choices is not important or space is limited and only     one choice is valid.
            - Use brief helper text in place of long labels
        - Don't
            - Don't use when knowing choices is important. Use checkboxes. When it is important to see available    choices use radio buttons

    ### Style
        -Use same styling as text fields Text should be brief. Avoid acronyms or codes unless they are generally understood.


## API
    ### Selector
        * mat-select

    ### Export As
        * matSelect

    ### Properties
        * @Input('aria-label') ariaLabel: string
            * Aria label of the select. If not specified, the placeholder will be used as label.

        * @Input('aria-labelledby') ariaLabelledby: string
            * Input that can be used to specify the aria-labelledby attribute.

        * @Input() compareWith: (o1: any, o2: any) => boolean
            * A function to compare the option values with the selected values. The first argument is a value from an option. The second is a value from the selection. A boolean should be returned.

        * @Input() disableOptionCentering: boolean
            * Whether to center the active option over the trigger.

        * @Input() disableRipple: boolean
            * Whether ripples are disabled.

        * @Input() disabled: boolean
            * Whether the component is disabled.

        * @Input() errorStateMatcher: ErrorStateMatcher
            * An object used to control when error messages are shown.

        * @Input() id: string
            * Unique id of the element.

        * @Input() multiple: boolean
            * Whether the user should be allowed to select multiple options.

        * @Input() panelClass: string | string[] | Set<string> | { [key: string]: any; }
            * Classes to be passed to the select panel. Supports the same syntax as ngClass.

        * @Input() placeholder: string
            * Placeholder to be shown if no value has been selected.

        * @Input() required: boolean
            * Whether the component is required.

        * @Input() value: any
            * Value of the select control.

        * @Output() openedChange: EventEmitter<boolean>
            * Event emitted when the select panel has been toggled.

        * @Output() selectionChange: EventEmitter<MatSelectChange>
            * Event emitted when the selected value has been changed by the user.

        * autofilled: boolean
            * Whether the input is currently in an autofilled state. If property is not present on the control it is assumed to be false.

        * controlType: 'mat-select'
            * A name for this control that can be used by mat-form-field.

        * customTrigger: MatSelectTrigger
            * User-supplied override of the trigger element.

        * empty: boolean
            * Whether the select has a value.

        * errorState: boolean
            * Whether the control is in an error state.

        * focused: boolean
            * Whether the select is focused.

        * ngControl: NgControl optionGroups: QueryList<MatOptgroup>
            * All of the defined groups of options.

        * optionSelectionChanges: Observable<MatOptionSelectionChange>
            * Combined stream of all of the child options' change events.

        * options: QueryList<MatOption>
            * All of the defined select options.

        * overlayDir: CdkConnectedOverlay
            * Overlay pane containing the options.

        * panel: ElementRef
            * Panel containing the select options.

        * panelOpen: boolean
            * Whether or not the overlay panel is open.

        * selected: MatOption | MatOption[]
            * The currently selected option.

        * stateChanges: Observable<void>
            * Stream that emits whenever the state of the control changes such that the parent MatFormField needs to run change detection.

        * trigger: ElementRef
            * Trigger that opens the select.

        * triggerValue: string
            * The value displayed in the trigger.

    ### Methods 
        * close()
        * focus()
        * open()
        * toggle()


## Implementation HTML
    <mat-form-field>
        <mat-select placeholder="Favorite StarTrek Planet">
            <mat-option *ngFor="let planet of planets" [value]="planet.value">
                    {{ planet.viewValue }}
            </mat-option>
        </mat-select>
    </mat-form-field>


## Implementation TS
    planets = [
        {value: 'vulcan-0', viewValue: 'Vulcan'},
        {value: 'romulus-1', viewValue: 'Romulus'},
        {value: 'qonos-2', viewValue: `Qo'noS`}
    ];