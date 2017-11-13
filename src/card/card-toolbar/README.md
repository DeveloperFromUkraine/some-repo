# Card Toolbar

Card toolbar is to be used as a card header, which right now only includes a title (left) and buttons (right)

## Usage
Declare an `ign-card-toolbar`. Put an `ign-card-title` inside. ign-card-title will be transcluded to the left automatically. Now fill the `ign-card-toolbar` with everything you wish to float to the right (should only be a primary button and a '...' icon right now)

## Example

```
<ign-card-section>
  <ign-card-toolbar>
    <ign-card-title da="deductionTitleLabel">{{(deduction$ | async)?.name}}</ign-card-title>
    <button mat-button [routerLink]="['edit']" da="deductionEditButton">
      {{'COMMON.EDIT' | translate}}
    </button>
    <button
      mat-icon-button
      da="deductionMenuButton"
    >
      <mat-icon
        class="mat-24"
      >
        more_vert
      </mat-icon>
    </button>
  </ign-card-toolbar>
  <ign-deduction-detail
    [deduction]="deduction$ | async">
  </ign-deduction-detail>
</ign-card-section>
```
