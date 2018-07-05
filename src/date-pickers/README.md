## Use
    - The datepicker allows users to enter a date either through text input or by choosing a date from the calendar. It also supports setting a date range. See [Material Design date pickers](https://material.io/guidelines/components/pickers.html#pickers-date-pickers) and [Angular Material datepicker](https://material.angular.io/components/datepicker/overview).
    - In code date pickers are out of the box Angular Material components with the exception of Date Range Picker which is a custom implementation for now. Date pickers are composed of a Text Field with an icon that opens a Date Picker when clicked.
    -Use date pickers to help users choose properly formatted dates.

        * Date pickers are helpful for choosing a not-yet-known date in context so you can be influenced by the day of the week or week of the month you're trying to select.
    
        * They are less helpful for known dates like birthdates. This date picker allows entering free-form and using the picker.
    
        * For date ranges: where it is helpful to see both the start and end date
            * now: use two date pickers
            * future: will provide a date range picker to make it easier
        
    
    Combinations of this setup can be used to compose a Date Range Picker:
        * Do
            * Use when choosing a not-yet-known date in context so you can be influenced by the day of the week or week of the month  
        * Don't 
            * Use for known dates if not needed. Dates can also be typed.

## API
    ### Selector
        * mat-date-picker

    ### Export As
        * matDatePicker

    ### MatDatePickerToggle Properties: 
        * @Input('for') datepicker: MatDatepicker<D>
            * Datepicker instance that the button will toggle.

        * @Input() disabled: boolean
            * Whether the toggle button is disabled.

    ### MatDatePicker Properties: 
        * Input() calendarHeaderComponent: ComponentType<any>
            * An input indicating the type of the custom header component for the calendar, if set.

        * @Input() color: ThemePalette
            * Color palette to use on the datepicker's calendar.

        * @Input() disabled: boolean
            * Whether the datepicker pop-up should be disabled.

        * @Input() opened: boolean
            * Whether the calendar is open.

        * @Input() panelClass: string | string[]
            * Classes to be passed to the date picker panel. Supports the same syntax as ngClass.

        * @Input() startAt: D | null
            * The date to open the calendar to initially.

        * @Input() startView: 'month' | 'year'
            * The view that the calendar should start in.

        * @Input() touchUi: boolean
            * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather than a popup and elements have more padding to allow for bigger touch targets.

        * @Output('closed') closedStream: EventEmitter<void>
            * Emits when the datepicker has been closed.

        * @Output() monthSelected: EventEmitter<D>
            * Emits selected month in year view. This doesn't imply a change on the selected date.

        * @Output('opened') openedStream: EventEmitter<void>
            * Emits when the datepicker has been opened.

        * @Output() yearSelected: EventEmitter<D>
            * Emits selected year in multiyear view. This doesn't imply a change on the selected date.

        * id: string
            * The id for the datepicker calendar.

## Implementation HTML
    <mat-form-field>
        <input matInput [matDatepicker]="picker" placeholder="Choose a date">
        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>

## Implementation TS

    None