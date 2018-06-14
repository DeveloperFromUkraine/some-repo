## Use
    The display for the list content panel when there is no valid selection.

    ### Implementation
        This page should only appear when there is no list item selected.
        Don't
            - Empty states should not be used in this instance, as the state is not empty.
        Do
            - Create a visual and textual rendering to show the user an item is not selected
            - It is not neccesary to implement an unselected state. 

    ### Accessibility
        - List view must have clickable content if this component is in use.


## API
    ### Selector
        * ign-list-content-unselected-state
    
    ### Exported As 
        * ListContentUnselectedStateComponent


## Implementation HTML
    <ign-list-content-unselected-state></ign-list-content-unselected-state>


## Implementation TS
    None