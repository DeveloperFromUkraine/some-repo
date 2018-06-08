## Use
    A search component which displays a search icon and an input field to be used with lists. List search is used for searching through a list.

    ### Location
        - List search components are placed at the tops of lists.

    ### Output
        - List search components emit an observable.
        - The observable must be handled by the consumer to search the list.

    ### Accessibility
        - Add a descriptive ariaLabel attribute that describes what is being searched (for example: "Search           Employees")
        - Add the following aria attributes to the (nav) list that the list search component corresponds to:
            aria-live="polite"
            aria-atomic="true"
            attr.aria-label="{{ 'COMMON.SEARCH_HINTS' | translate }}"
        - Refer to Sample HTML for an example on usage


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
