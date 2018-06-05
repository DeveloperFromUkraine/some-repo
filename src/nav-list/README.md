## API
    ### Selector
        * mat-nav-list
    
    ### Exported As 
        * matNavList
        
    ### Properties
        * `@Input() disableRipple: boolean`
            * disables/enables rippling effect

## Implementation HTML
    <mat-nav-list>
        <a ign-list-item onClick=window.open() *ngFor="let folder of folders" target="\_blank" tabindex="0">
            <mat-icon mat-list-icon>folder</mat-icon>
            <h4>{{folder.name}}</h4>
            <p> {{folder.updated | date}} </p>
        </a>
    </mat-nav-list>

## Implementation TS
    folders = [
    {
        name: 'Click the folders to open a blank page.',
        updated: new Date('1/1/16'),
    },
    {
        name: 'Your descriptor will go here.',
        updated: new Date('1/17/16'),
    },
    {
        name: 'The dates are just for show.',
        updated: new Date('1/28/16'),
    }
    ];