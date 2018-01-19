# Date Range Picker

`import { DateRangeModule } from 'ignite-design-system';`

## DateRangeComponent

A pair of date pickers corresponding to the start and end dates of a range.

Selector: `ign-date-range`

### Properties

| Name                                            | Description |
|-------------------------------------------------|-------------|
| `@Input() formGroup: FormGroup`                 | The form group for date values |
| `@Input() startDateControlName = 'startDate'`   | The name of the start picker control in `formGroup` |
| `@Input() endDateControlName = 'endDate'`       | The name of the end picker control in `formGroup` |
| `@Input() startDateFilter: (Date) => boolean`   | An optional filter function to disable specific dates in the start picker |
| `@Input() endDateFilter: (Date) => boolean`     | An optional filter function to disable specific dates in the end picker |