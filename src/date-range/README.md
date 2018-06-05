# Date Range Picker

`import { DateRangeModule } from 'ignite-design-system';`

## DateRangeComponent

A pair of date pickers corresponding to the start and end dates of a range.

## API
    ### Selector
        * ign-date-range

    ### Export As
        * DateRangeComponent

    ### Properties
        * `@Input() formGroup: FormGroup`
            * The form group for date values
        * `@Input() startDateControlName = 'startDate'`
            * The name of the start picker control in `formGroup`
        * `@Input() endDateControlName = 'endDate'`
            * The name of the end picker control in `formGroup`
        * `@Input() startDateFilter: (Date) => boolean`
            * An optional filter function to disable specific dates in the start picker
        * `@Input() endDateFilter: (Date) => boolean`
            * An optional filter function to disable specific dates in the end picker

## Implementation HTML
    <form [formGroup]="form">
        <ign-date-range [formGroup]="form.controls.myDateRange"></ign-date-range>
    </form>

## Implementation TS
    public formBuilder: FormBuilder;
    private close$ = new Subject<void>();
    form: FormGroup;
    constructor (formBuilder: FormBuilder) {
        this.formBuilder = formBuilder;
    }
    ngOnInit(): void {
        this.form = this.formBuilder.group({
            myDateRange: this.formBuilder.group({
            startDate: [new Date()],
            endDate: [null]
            })
        })
    }
    ngOnDestroy(): void {
        this.close$.next();
        this.close$.complete();
    } 
