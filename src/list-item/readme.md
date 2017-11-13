# List Item Components

## List Item Content

`List item content` may hold multiple occurrences of text or anything else desired for the list item's content

## List Item

`List item` may hold `list item content`, along with a menu if desired, ensuring that the two appear stylistically correct

## List Item Container

`List item container` will usually serve as a container for multiple occurrences of `list item` components.

## Usage

The following is a usage example demonstrating the above descriptions:

```
      <ign-list-container>
        <ign-list-item *ngFor="let item of (organizationLevels$ | async)">
          <ign-list-item-content tabindex="0" ignA11yClick (click)="handleClick(item.id)">
            <ign-list-item-primary-text>{{ item?.name }}</ign-list-item-primary-text>
            <ign-list-item-secondary-text *ngIf="item?.organizationUnitCount>0">
              {{ 'ACTIVATION.ORGANIZATION_LEVELS_UNITS_ADDED' | translate: {amount:item?.organizationUnitCount, orgLevelName:item?.name} }}
            </ign-list-item-secondary-text>
            <ign-list-item-secondary-text *ngIf="!(item?.organizationUnitCount>0)">
              {{ 'ACTIVATION.ORGANIZATION_LEVELS_ADD' | translate: {orgLevelName:item?.name} }}
            </ign-list-item-secondary-text>
          </ign-list-item-content>
          <mat-menu #listMenu="matMenu">
            <button mat-meign-item [routerLink]="['./', item.id]">
              <mat-icon>edit</mat-icon>
              <span>{{ 'COMMON.EDIT' | translate }}</span>
            </button>
            <ign-divider></ign-divider>
            <button mat-meign-item (click)="handleDelete(item.id)">
              <mat-icon>delete</mat-icon>
              <span>{{ 'COMMON.DELETE' | translate }}</span>
            </button>
          </mat-menu>
          <button mat-icon-button [matMenuTriggerFor]="listMenu">
            <mat-icon class="mat-24 menu">more_vert</mat-icon>
          </button>
        </ign-list-item>
      </ign-list-container>
```
