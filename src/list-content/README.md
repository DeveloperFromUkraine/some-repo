## Use
    - List components are used for a large selection of content that is individualized based on the users' needs. - List components consist of a list view with summarized information and a content view, which provides more      information on the respective list item from the list view. In most cases, list components allow for the      user to add and remove list items.

    ### Implementation
        - List content components should be placed where there are many options of similar context with
            individual content.

    ### List Content Panel
        - The panel will contain information in regards to the selected list item.

    ### List Content
        - List of items within a given context.
        - Can be used for instances such as
            -Employees
            -PTO Categories
        - Can contain avatars to help differentiate list items, especially with employees.

    ### Accessibility
        - List Content components have skip-nav accessibility integrated by default. 


## API
    ### Selector
        * ign-list-content
    
    ### Exported As 
        * ListContentComponent


## Implementation HTML
    <ign-list-content>
    <!-- List View -->
    <ign-list-selection>
    <ign-list-selection-item
        [key]="'I Am A Key'"
        [title]="'I Am A List View Title'"
        [subtitle]="'I Am A List View Subtitle'"
    >
    </ign-list-selection-item>
    </ign-list-selection>
    <!-- Content View -->
    <ign-list-content-panel>
    <ign-list-content-empty-state>
        <button
        mat-button
        mat-raised-button
        color="accent"
        type="button">
        Add
        </button>
    </ign-list-content-empty-state>
    <ign-list-content-unselected-state>
        <ign-card-title>Content View</ign-card-title>
    </ign-list-content-unselected-state>
    <ign-list-content-card>
        This is content!
    </ign-list-content-card>
    </ign-list-content-panel>
    </ign-list-content>


 ## Implementation TS
    None