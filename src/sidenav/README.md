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