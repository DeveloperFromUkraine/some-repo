## Use
    A selection list provides an interface for selecting values, where each list item is an option.
    See [Material Design List](https://material.io/guidelines/style/icons.html) and [Angular Material List Controls](https://material.io/guidelines/components/lists-controls.html#lists-controls-usage).

    ### Content
        - The options within a selection-list should not contain further interactive controls, such as buttons and anchors.
        - To add an icon to your list item, use the matListIcon attribute.
    
    ### Style
        - Each selection-list item should be concise.
        - A selection list must contain more than one selection-list item in the list.


## API
    ### Selector 
        * mat-selections-list

    ### Export As
        * matSelectionList

    ### Properties
        * @Input() compareWith: (o1: any, o2: any) => boolean
            * Function used for comparing an option against the selected value when determining which options should appear as selected. The first argument is the value of an options. The second one is a value from the selected value. A boolean must be returned.

        * @Input() disableRipple: boolean
            * Whether ripples are disabled.

        * @Input() disabled: boolean
            * Whether the component is disabled.

        * @Output() selectionChange: EventEmitter<MatSelectionListChange>
            * Emits a change event whenever the selected state of an option changes.

        * options: QueryList<MatListOption>
            * The option components contained within this selection-list.

        * selectedOptions: SelectionModel<MatListOption>
            * The currently selected options.

    ### Methods
        * deselectAll()
        * focus()
        * selectAll()


## Implementation HTML
    <mat-selection-list \#options>
        <mat-list-option \*ngFor="let option of typesOfOptions">
            {{option}}
        </mat-list-option>
    </mat-selection-list>
    <p>
        Options selected: {{options.selectedOptions.selected.length}}
    </p>


## Implementation TS

    typesOfOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];