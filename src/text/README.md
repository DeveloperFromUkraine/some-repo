## API
    ### Selector
        * ign-text-list-item-primary-text
        * ign-text-list-item-secondary-text

    ### Export As
        * TextListItemPrimaryTextComponent
        * TextListItemSecondaryTextComponent

## Implementation HTML
    <ign-page>
        <mat-card>
            <ign-card-main>
                <ign-card-title>
                    The card contains a two text-list-item components.
                </ign-card-title>
                <ign-nav-list>
                    <ign-text-list-item
                            primaryText="I'm one text-list-item."
                            secondaryText="You can click me.">
                    </ign-text-list-item>
                    <ign-text-list-item
                            primaryText="I'm another text-list-item."
                            secondaryText="I'm also clickable.">
                    </ign-text-list-item>
                </ign-nav-list>
            </ign-card-main>
        </mat-card>
    </ign-page>

## Implementation TS
    None