# Text List Item

`Text List Item`'s purpose is to display list items composed of primary and/or secondary/tertiary text and may include
routes. Please see ## Usage below.


## Properties

| Name                                            | Description                |
|-------------------------------------------------|----------------------------|
| `@Input() primaryText: string`                  | Primary text to display*   |
| `@Input() secondaryText: string`                | Secondary text to display* |
| `@Input() tertiaryText: string`                 | Tertiary text to display*  |


*Note: If no primary text is provided, secondary text will be displayed as primary text. If tertiary text is also
provided in this case, it will be displayed as secondary text.


### Usage

The following is a usage example:

```
    <ign-page>
      <ign-card-container>
        <ign-card-main>
          <ign-card-title>
            Organizational Units
          </ign-card-title>

        <ign-nav-list>
          <ign-text-list-item *ngFor="let item of (organizationLevels$ | async)"
            primaryText="{{ item?.name }}"
            secondaryText="{{ item?.organizationUnitCount > 0 ? ('ACTIVATION.ORGANIZATION_LEVELS_UNITS_ADDED' | translate) : ('ACTIVATION.ORGANIZATION_LEVELS_ADD' | translate)}}"
            role="link"
            [routerLink]="['./', item.id]">
          </ign-text-list-item>
        </ign-nav-list>

        </ign-card-main>
      </ign-card-container>
    </ign-page>

```
