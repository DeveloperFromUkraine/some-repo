## API
    ### Selector
        * ign-sidenav-list-item

    ### Export As
        * SideNavListItemComponent

    ### Properties
        * @Input() icon: string;
            * icon file to display
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