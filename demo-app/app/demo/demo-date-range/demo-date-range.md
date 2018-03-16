
## Content

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


## Style

* The date range component should be placed in the upper left or right hand corners of a card or page.