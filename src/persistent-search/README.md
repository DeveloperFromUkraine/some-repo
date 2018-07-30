### Accessibility
    - Add the following aria attributes to the corresponding (nav) list, data table, or other component that the persistent search relates to:
        aria-live="polite"
        aria-atomic="true"
        attr.aria-label="{{ 'COMMON.SEARCH_HINTS' | translate }}"
    - Refer to Sample HTML for an example on usage


## API
    ### Selector
        * ign-persistent-search

    ### Exported As
        * PersistentSearchComponent
    
    ### Properties
    * `@Input() placeholder: string`
        * Takes in a descriptive placeholder for the input
    * `@Output() searchCriteria$: BehaviorSubject`
        * Outputs search values for consumers to subscribe to


## Implementation HTML
    <ign-persistent-search placeholder="Search employees"></ign-persistent-search>


## Implementation TS
    None
