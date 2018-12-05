## Use
    For use as a list that contains list items for selection.

    ### Implementation 
        - Best for use with list content components.

    ### Accessibility
        - Should have skip-nav integration if accompanied by content that renders outside of the list item.


## API
    ### Selector
        * ign-list-selection-item
    
    ### Exported As
        * ListSelectionItemComponent


## Implementation HTML
    <!-- basic list item -->
    <ign-list-selection-item></ign-list-selection-item>
    
    <!-- list item with custom content -->
    <ign-list-selection-item
        title="Item one"
        [subtitle]="'my subtitle'">
        statusText="Processing">
    </ign-list-selection-item>
Other `@Input`s: key;
Other `@Output`s: onClick;

## Implementation TS
    None