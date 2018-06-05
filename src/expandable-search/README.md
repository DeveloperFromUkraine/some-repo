# Expandable Search

A search component which displays a search icon, which, when clicked, expands to display an input field with a button to go back
to exit search and a button within the input field to clear search text.

## API 
  ### Selector
    * ign-expandable-search

  ### Export As
    * ExpandableSearchComponent

  ### Properties
  * @ViewChild('searchInput') searchInput: ElementRef;
    * Child of the search input
  * `@Output() searchCriteria$: BehaviorSubject<any>`
    * Outputs search values for consumers to subscribe to 

## Implementation HTML
  <ign-expandable-search></ign-expandable-search>

## Implementation TS
  None
