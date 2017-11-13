`ign-right-drawer`

API:

  attributes:
  startOpen: boolean
  open: boolean (implicit state, but exposed if needed)
  title: string

  methods:
  toggleDrawer(boolean)
  closeDrawer()
  openDrawer()

  emitters:
  openChange(boolean)


Example usage:

```
<ign-list-content>
  <!-- List View  -->
  <ign-list-selection>
    <ign-list-selection-item
      *ngFor="let item of (earnings$ | async); let i = index"
      [routerLink]="['./', item.id]"
      [routerLinkActive]="'active'"
      [key]="item.id"
      [title]="item.earningCode"
      [subtitle]="item.payStatementDescription"
    >
    </ign-list-selection-item>
    <ign-list-selection-add-button [routerLink]="['./add']"></ign-list-selection-add-button>
  </ign-list-selection>


  <!-- Content View -->
  <ign-list-content-panel>
    <!--State for no earnings created yet  -->
    <ign-list-content-empty-state
      *ngIf="(earnings$ | async)?.length === 0"
    >
    </ign-list-content-empty-state>

    <!--State for earnings exist, but user hasn't selected one yet  -->
    <ign-list-content-unselected-state [hidden]="isEarningSelected">
      <ign-card-title>Please select an Earnings</ign-card-title>
    </ign-list-content-unselected-state>

    <!--State for inspecting selected earnings  -->
    <ign-list-content-card [hidden]="!isEarningSelected">
      <router-outlet (activate)="isEarningSelected=true" (deactivate)="isEarningSelected=false"></router-outlet>
    </ign-list-content-card>

    <ign-right-drawer
      title="sup fam"
      [startOpen]="false"
    >
      <ign-list-selection-item
        key="1234"
        title="meow"
        subtitle="meow subtitle"
      >
      </ign-list-selection-item>
    </ign-right-drawer>

  </ign-list-content-panel>
</ign-list-content>
```
