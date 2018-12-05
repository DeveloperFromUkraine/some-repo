## Use
  `Text List Item`'s purpose is to display list items composed of primary and/or secondary/tertiary text and may   include routes. 

  ### Implementation
    -Text List items should be used in text lists.
    Do
      - use text within text list items
      - add links, where needed
    Don't
      - use images
      - use icons
      - use avatars

  ### Content
    -Text list items should be short and concise
    -Text list items should be references to other pages or used as options in multi-selection content.

  ### Accessibility
    - Text list items should not have a tab index of 0; they are not action items. 


## API

  ### Properties
    - `@Input() primaryText: string`                  
      - Primary text to display
    - `@Input() secondaryText: string`
      - Secondary text to display
    - `@Input() tertiaryText: string`
      - Tertiary text to display
    * Note: If no primary text is provided, secondary text will be displayed as primary text. If tertiary text is    also provided in this case, it will be displayed as secondary text.


## Implementation HTML
    <ign-page>
      <mat-card>
        <ign-card-main>
          <ign-card-title>
            Organizational Units
          </ign-card-title>

        <ign-nav-list>
          <ign-text-list-item
            primaryText=""
            secondaryText=""
            role="link"
          </ign-text-list-item>
        </ign-nav-list>

        </ign-card-main>
      </mat-card>
    </ign-page>


### Implementation TS
  None
