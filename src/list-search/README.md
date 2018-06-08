## API
    ### Selector
        * ign-list-search

    ### Exported As
        * ListSearchComponent
    
    ### Properties
    * `@Input() ariaLabel: string`
        * Takes in descriptive label to set aria-label to
    * `@Output() searchCriteria$: BehaviorSubject`
        * Outputs search values for consumers to subscribe to

## Implementation HTML
    <ign-list-search ariaLabel="Search employees"></ign-list-search>

## Implementation TS
    None
