# Divider Component

The `divider` serves to distinctly separate content

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
