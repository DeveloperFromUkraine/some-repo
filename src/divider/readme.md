## Use
  The `divider` serves to distinctly separate content.
  A <mat-divider> element can be used on its own to create a horizontal or vertical line styled with a Material theme

  ### Types
    - Add the inset attribute in order to set whether or not the divider is an inset divider.
    - Add the vertical attribute in order to set whether or not the divider is vertically-oriented.
    
  ### List with Inset Dividers
    - Dividers can be added to lists as a means of separating content into distinct sections. Inset dividers can    also be added to provide the appearance of distinct elements in a list without cluttering content like        avatar images or icons. Make sure to avoid adding an inset divider to the last element in a list, because     it will overlap with the section divider.

## API
  ### Selector
    * mat-divider

  ### Export As
    None

## Implementation HTML
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

## Implementation TS
  None
