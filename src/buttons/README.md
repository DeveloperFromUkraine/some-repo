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