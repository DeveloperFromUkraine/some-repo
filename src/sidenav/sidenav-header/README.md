## Use
    Sidenav header is the container for the sidenav header.

    ### Content
        - Header should be personal.
        - Header can contain:
            - Avatars 
            - User name
            - Welcome messages


## API
    ### Selector
        * ign-sidenav-header

    ### Export As 
        * SideNavHeaderComponent

    ### Properties 
        * @Input() title: string;
            * title of side nav header
        * @Input() subtitle: string;
            * subtitle of side nav header


## Implementation HTML
    <mat-sidenav>
        <ign-sidenav-header></ign-sidenav-header>
    </mat-sidenav>


## Implementation TS
    None