## API
    ### Selector
        * [ignSizeSmall], [nuSizeSmall]
        * [ignSizeMedium], [nuSizeMedium]
        * [ignSizeLarge], [nuSizeLarge]
        * [ignSizeFull], [nuSizeFull]

     ### Exported As
        * SizingSmallDirective
        * SizingMediumDirective
        * SizingLargeDirective
        * SizingFullDirective

    ### Properties
        * @Directive({ selector: '[ignSizeSmall], [nuSizeSmall]' })
                * None
        * @Directive({ selector: '[ignSizeMedium], [nuSizeMedium]' })
            * @Input() ignSizeMedium: boolean = null;
                * sets medium size ign
            * @Input() nuSizeMedium: boolean = null;
                * sets medium size nu
        * @Directive({ selector: '[ignSizeLarge], [nuSizeLarge]' })
            * @Input() nuSizeLarge: boolean = null;
                * sets large size ign
            * @Input() ignSizeLarge: boolean = null;
                * sets large size nu
        * @Directive({ selector: '[ignSizeFull], [nuSizeFull]' })
            * None

## Implementation HTML
    <p ignSizeFull>one</p>
    <p nuSizeFull>two</p>

## Implementation TS
    None