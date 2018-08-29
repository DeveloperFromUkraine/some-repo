## Use
    Sidenav list items are selectable list items meant to be placed in the sidenav list.

    ### Functionality
        - The list items should be links or navigational in nature.
        - There should be no informational content linked to the list items.

    ### Content
        - Text.
        - No images.
        - Concise information about the navigational endpoint.

## API
    ### Selector
        * ign-sidenav-list-item

    ### Export As
        * SideNavListItemComponent

    ### Properties
        * @Input() icon: string;
            * icon file to display
        * @Input() svgIcon: string;
            * alternative way to pass an icon when it is being loaded from an SVG file
        * @Input() description: string;
            * description of side nav list item
        * @Input() key: string;
            * key for list item
        * @Output() onClick: EventEmitter<string> = new EventEmitter();
            * event emitter for click

## Implementation HTML
    <mat-sidenav>
        <ign-sidenav-list>
            <ign-sidenav-list-item></ign-sidenav-list-item>
        </ign-sidenav-list>
    </mat-sidenav>

## Implementation TS
    None