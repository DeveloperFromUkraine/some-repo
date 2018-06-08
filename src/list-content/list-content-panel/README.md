## Use
    List content panels are used for containing additional information to a selected list item.

    ### Unselected State
        - If no item selected, content panel should reflect that no item is selected, by either:
            - ign unselected state
            - leaving blank

    ### Selected State
        - The information pertaining to the selected list item should be displayed in the content panel.
        - The panel is a container, and can contain cards, action items, and other information.

    ### Content
        - List-content-panel is required for creating a list component.
        - List-content-panel should be allocated to the right hand side of the list component.
        - List-content-panel houses the list-content-card.
        - List-content-panel can be shown or hidden until manually selected.
        
    ### Accessibility
        - Skip navigation is integrated into the list content component by default.
        - Skip nav allows for the list content to be skipped by the user to the list content panel. 


## API
    ### Selector
        * ign-list-content-panel
    
    ### Exported As 
        * ListContentPanelComponent


## Implementation HTML
    <ign-list-content-panel></ign-list-content-panel>
    
    
## Implementation TS
    None