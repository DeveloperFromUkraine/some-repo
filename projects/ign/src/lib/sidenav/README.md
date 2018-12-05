## Use
    Sidenav components are utilized to act as site navigational windows without the need to open a different page or interrupt the user experience. See [Angular Material Sidenav](https://material.angular.io/components/sidenav/overview).

    ### Content
        -There are three sub components to the sidenav:
            sidenav-header
            sidenav-list
            sidenav-list-item
        - The sidenav component should contain references and links to other pages.
        - The sidenav component should be used solely for navigational purposes.
        - Single line items, two line items, and icons are supported menu items.
        - List subheaders should be used to separate distinct groups of items.
        - Two line items should consist of primary and secondary text and should not utilize icons.

    ### Style
        - One sidenav component should be referenced throughout the entire user experience.
        - Sidenav components should be allocated to the left hand side of the page and stretch to 100% vh.
        - Sidenav components may have the ability to toggle at developers' preferences. 

    ### Accessibility
        -Include aria-haspopup="true" aria-hidden="false" within the tag of the component that you are using        toggle the visibility of the sidenav
        - Set a descriptive aria-label for what the component that toggles the sidenav opens. Update the            aria-label depending on the sidenavs visibility
        - Set an aria-expanded tag on the for the component that toggles the sidenav and change it depending on     if the sidenav is opened/closed
        - Set an aria-expanded tag for the actual sidenav component and toggle that depending on if it is           opened/closed
        - Refer to Sample HTML and TS for example 


## API
    ### Selector MatSidenavContainer
        * mat-sidenav-container

    ### Selector SideNavHeader
        * ign-sidenav-header

    ### Selector SideNavList
        * ign-sidenav-list

    ### Selector SideNavListItem
        * ign-sidenav-list-item

    ### Export As MatSideNavContainer
        * matSidenavContainer

    ### Export As SideNavHeader
        * SideNavHeaderComponent

    ### Export As SideNavList
        * SideNavListComponent

    ### Export As SideNavListItem
        * SideNavListItemComponent

    ### Properties MatSideNavContainer
        * @Input() autosize: boolean
            * Whether to automatically resize the container whenever the size of any of its drawers changes.
            * Use at your own risk! Enabling this option can cause layout thrashing by measuring the drawers on every change detection cycle. Can be configured globally via the MAT_DRAWER_DEFAULT_AUTOSIZE token.

        * @Input() hasBackdrop: any
            * Whether the drawer container should have a backdrop while one of the sidenavs is open. If explicitly set to true, the backdrop will be enabled for drawers in the side mode as well.

        * @Output() backdropClick: EventEmitter<void>
            * Event emitted when the drawer backdrop is clicked.

        * end: MatDrawer | null
            * The drawer child with the end position.

        *   scrollable: CdkScrollable
            * Reference to the CdkScrollable instance that wraps the scrollable content.

        * start: MatDrawer | null
            * The drawer child with the start position.

    ### Properties SideNavHeader
        * @Input() title: string;
            * title of side nav header
        * @Input() subtitle: string;
            * subtitle of side nav header

    ### Properties SideNavListItem
        * @Input() icon: string;
            * icon file to display
        * @Input() description: string;
            * description of side nav list item
        * @Input() key: string;
            * key for list item
        * @Output() onClick: EventEmitter<string> = new EventEmitter();
            * event emitter for click


## Implementation HTML
    <mat-sidenav-container>
    <mat-sidenav #sidenav class="sidenav" mode="side" opened="false" [fixedInViewport]="true" aria-expanded="true" [fixedTopGap]="headerHeight + 8">
    <ul>
    <li *ngFor="let item of navItems">
        <a [routerLink]="[item.route]">	{ item.name }</a>
    </li>
    </ul>
    </mat-sidenav>
    <mat-sidenav-content>
    <mat-card>
    <header #header>
        <mat-toolbar style="background-color: white; color: #424949" class="mat-elevation-z5">
        <button mat-icon-button attr.aria-label="{ {sidenavAriaLabel} }" role="button" attr.aria-expanded="{ {sidenavVisibility} }" aria-haspopup="true" aria-hidden="false" >
    <mat-icon style="color:lightgray"(click)="toggleSideNav()" class="material-icons" >menu</mat-icon></button>
        <button mat-button><img class ="logo-small" src="/assets/logo-small.png"></button>
        Ignite Design System
        </mat-toolbar>
    </header>
    <router-outlet></router-outlet>
    </mat-card>
    </mat-sidenav-content>
    </mat-sidenav-container>


## Implementation TS
    @ViewChild('sidenav') sidenav: any;
    sidenavAriaLabel: string;
    sidenavVisibility: string;
    private sidenavOpenedText: string = "Close Side Navigation";
    private sidenavClosedText: string = "Open Side Navigation";
    ngOnInit(): void {
    this.sidenavAriaLabel = this.sidenav.opened ? this.sidenavOpenedText : this.sidenavClosedText;
    this.sidenavVisibility = this.sidenav.opened;
    }
    toggleSideNav(): void {
    this.sidenav.toggle();
    this.sidenavAriaLabel = this.sidenav.opened ? this.sidenavOpenedText : this.sidenavClosedText;
    this.sidenavVisibility = this.sidenav.opened;
    }