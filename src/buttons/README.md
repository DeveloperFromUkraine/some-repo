## Use
    Native <button> and <a> elements are always used in order to provide the most straightforward and accessible experience for users. A <button> element should be used whenever some action is performed. An <a> element should be used whenever the user will navigate to another view. See [Angular Material Button](https://material.angular.io/components/button/overview).

    There are five button variants, each applied as an attribute:
        -mat-button	
            Rectangular button w/ no elevation.
        -mat-raised-button	
            Rectangular button w/ elevation
        -mat-stroked-button	
            Rectangular button w/ an outline border
        -mat-icon-button	
            Circular button with a transparent background, meant to contain an icon
        -mat-fab	
            Circular button w/ elevation, defaults to theme's accent color
        -mat-mini-fab	
            Same as mat-fab but smaller
    
    ### Theming
        Buttons can be colored in terms of the current theme using the color property to set the background color to primary, accent, or warn. By default, only FABs (Floating Action Button) are colored; the default background color for mat-button and mat-raised-button matches the theme's background color.

    ### Capitalization
        According to the Material design spec button text has to be capitalized, however we have opted not to capitalize buttons automatically via text-transform: uppercase, because it can cause issues in certain locales. It is also worth noting that using ALL CAPS in the text itself causes issues for screen-readers, which will read the text character-by-character. We leave the decision of how to approach this to the consuming app.

    ### Accessibility
        Angular Material uses native <button> and <a> elements to ensure an accessible experience by default. The <button> element should be used for any interaction that performs an action on the current page. The <a> element should be used for any interaction that navigates to another view.
        Buttons or links containing only icons (such as mat-fab, mat-mini-fab, and mat-icon-button) should be given a meaningful label via aria-label or aria-labelledby.

    ### Implementation
        Dialogs, cards
            Use flat buttons in dialogs and most cards.
        Inline, forms
            - Raised buttons or flat buttons can be used for inline buttons or forms.
        Always available
            -If your app requires actions to be persistent and readily available, you can use the floating action   button or persistent footer buttons.

## API
    ### Selectors
        * mat-button

    ### Export As
        * matButton
        
    ### Properties
        * @Input() color: ThemePalette
            * Theme color palette for the component.

        * @Input() disableRipple: boolean
            * Whether ripples are disabled.

        * @Input() disabled: boolean
            * Whether the component is disabled.

        * isIconButton: boolean
            * Whether the button is icon button.

        * isRoundButton: boolean
            Whether the button is round.

        * ripple: MatRipple
            Reference to the MatRipple instance of the button.


## Implementation HTML
    <button mat-button>Basic</button>
    <button mat-button color="primary">Primary</button>
    <button mat-button color="accent">Accent</button>
    <button mat-button color="warn">Warn</button>
    <button mat-button disabled>Disabled</button>
    <a mat-button routerLink=".">Link</a>


## Implementation TS
    None