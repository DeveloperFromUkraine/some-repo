## API
    ### Selector MatIcon
        * mat-icon
    
    ### Exported As 
        * matIcon

    ### Properties MatIcon
        * @Input() color: ThemePalette
            * Theme color palette for the component.
        * @Input() fontIcon: string
            * Name of an icon within a font set.
        * @Input() fontSet: string
            * Font set that the icon is a part of.
        * @Input() inline: boolean
            * Whether the icon should be inlined, automatically sizing the icon to match the font size of the element the icon is contained in.
        * @Input() svgIcon: string
            * Name of the icon in the SVG icon set.
    
    ### Properties MatListIcon
        None

## Implementation HTML
    ### MatIcon
        <mat-icon attr.aria-label="{{ 'COMMON.HOME' | translate }}" aria-hidden="false" tabindex="0" role="button" (click)="handleClick()" ignA11yClick>home</mat-icon>
        <button (click)="handleClick()" attr.aria-label="{{ 'COMMON.HOME' | translate }}">
            <mat-icon>home</mat-icon>
        </button>
    
    ### Mat List Icon
        <mat-list>
            <mat-list-item *ngFor="let message of messages">
                <mat-icon matListIcon>folder</mat-icon>
                <h3 matLine> {{message.from}} </h3>
                <p matLine>
                <span> {{message.subject}} </span>
                <span class="demo-2"> -- {{message.content}} </span>
                </p>
            </mat-list-item>
        </mat-list>

## Implementation TS
    None