## Use
    Utilize the mat-nav-list component for navigation lists, such as those with anchor tags. Nav-list components' anchor tags can be wrapped in a ign-list-item for multiple links within the list. See [Angular Material Nav List](https://material.angular.io/components/list/overview_).

    ### Content
        -Mat nav list components differ from list components in that they are used to navigate to other links and   pages.
        - Mat nav lists should not be used simply declare content in a list form.
        - Mat nav lists should contain icons and buttons, as well as descriptors.

    ### Style
        - Mat nav lists should be displayed in vertical positioning.
        - Mat nav lists should be spaced evenly apart, to ensure ease of navigation.

    ### Implementation
        - Use mat-nav-list tags for navigation lists (i.e. lists that have anchor tags).
        - Simple navigation lists can use the mat-list-item attribute on anchor tag elements directly.
        - For more complex navigation lists (e.g. with more than one target per item), wrap the anchor element in   an <mat-list-item>.

    ### Accessibility
        -Add tabindex="0" within the a tag of the mat-nav-list in order to make each link accessible by tab
        -Refer to Sample HTML for an example

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