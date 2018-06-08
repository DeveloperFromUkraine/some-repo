## Use
    See [Angular Material Icon](https://material.angular.io/components/icon/overview). 

    ### Registering icons
        -MatIconRegistry is an injectable service that allows you to associate icon names with SVG URLs, HTML   strings and to define aliases for CSS font classes. Its methods are discussed below and listed in the API summary.

    ### Font icons with ligatures
        - Some fonts are designed to show icons by using ligatures, for example by rendering the text "home" as a    home image. To use a ligature icon, put its text in the content of the mat-icon component.
        - By default, <mat-icon> expects the Material icons font. (You will still need to include the HTML to       load the font and its CSS, as described in the link). You can specify a different font by setting the     fontSet input to either the CSS class to apply to use the desired font, or to an alias previously         registered with MatIconRegistry.registerFontClassAlias.

    ### Font icons with CSS
        - Fonts can also display icons by defining a CSS class for each icon glyph, which typically uses a          :before selector to cause the icon to appear. FontAwesome uses this approach to display its icons. To     use such a font, set the fontSet input to the font's CSS class (either the class itself or an alias       registered with MatIconRegistry.registerFontClassAlias), and set the fontIcon input to the class for      the specific icon to show.
        - For both types of font icons, you can specify the default font class to use when fontSet is not           explicitly set by calling MatIconRegistry.setDefaultFontSetClass.

    ### SVG icons
        - When an mat-icon component displays an SVG icon, it does so by directly inlining the SVG content into     the page as a child of the component. (Rather than using an  tag or a div background image). This makes   it easier to apply CSS styles to SVG icons. For example, the default color of the SVG content is the      CSS currentColor value. This makes SVG icons by default have the same color as surrounding text, and      allows you to change the color by setting the "color" style on the mat-icon element.
        - In order to prevent XSS vulnerabilities, any SVG URLs and HTML strings passed to the MatIconRegistry      must be marked as trusted by using Angular's DomSanitizer service.
        - Also note that all SVG icons, registered by URL, are fetched via XmlHttpRequest, and due to the           same-origin policy, their URLs must be on the same domain as the containing page, or their servers must   be configured to allow cross-domain access.

    ### Named icons
        - To associate a name with an icon URL, use the addSvgIcon, addSvgIconInNamespace, addSvgIconLiteral or     addSvgIconLiteralInNamespace methods of MatIconRegistry. After registering an icon, it can be displayed   by setting the svgIcon input. For an icon in the default namespace, use the name directly. For a          non-default namespace, use the format [namespace]:[name].

    ### Icon sets
        - Icon sets allow grouping multiple icons into a single SVG file. This is done by creating a single root    <svg> tag that contains multiple nested <svg> tags in its <defs> section. Each of these nested tags is    identified with an id attribute. This id is used as the name of the icon.
        - Icon sets are registered using the addSvgIconSet, addSvgIconSetInNamespace, addSvgIconSetLiteral or       addSvgIconSetLiteralInNamespace methods of MatIconRegistry. After an icon set is registered, each         of its embedded icons can be accessed by their id attributes. To display an icon from an icon set, use    the svgIcon input in the same way as for individually registered icons.
        - Multiple icon sets can be registered in the same namespace. Requesting an icon whose id appears in more   than one icon set, the icon from the most recently registered set will be used.

    ### Theming
        - By default, icons will use the current font color (currentColor). this color can be changed to match      the current theme's colors using the color attribute. This can be changed to 'primary', 'accent', or      'warn'.

    ### Accessibility
        - Similar to an <img> element, an icon alone does not convey any useful information for a screen-reader     user. The user of <mat-icon> must provide additional information pertaining to how the icon is used.      Based on the use-cases described below, mat-icon is marked as aria-hidden="true" by default, but this     can be overriden by adding aria-hidden="false" to the element.
        - In thinking about accessibility, it is useful to place icon use into one of three categories:
            -Decorative: the icon conveys no real semantic meaning and is purely cosmetic.
            -Interactive: a user will click or otherwise interact with the icon to perform some action.
            -Indicator: the icon is not interactive, but it conveys some information, such as a status. This        includes using the icon in place of text inside of a larger message.

        - When a mat-icon is embedded within a button, add a descriptive aria-label to the button.
        - When a mat-icon is being used as a button on its own, do the following:
            - Include a descriptive aria-label for the icon as well as setting aria-hidden="false" within the mat-icon tag
            - Add a tabindex="0" within the mat-icon tag so that it could be navigated to using tabs
            - If the icon is used as a button with eventhandlers on click, include a role="button" within the mat-icon tag
            - Test to see if the button can be tabbed to and "clicked" through the enter and spacebar keys.
            - If it cannot be clicked via keyboard, add the ignA11yClick attribute directive
        - Refer to HTML in Sample section on usage

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