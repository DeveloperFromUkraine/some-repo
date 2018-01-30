# Data Table Container

A container to house a Material data table. This container provides a paginator at the container's footer.

Selector: `ign-data-table-container`

## Properties

| Name                                            | Description |
|-------------------------------------------------|-------------|
| `@Input() dataSource: MatTableDataSource<any>`  | Data being used for Material data table |
| `@Input() pageIndex: number`                    | The index of the page |
| `@Input() totalElements: number`                | The total elements in a data table |
| `@Input() pageSizeOptions: number[]`            | Page size options to be made available within the paginator. If none are provided, [5, 10, 15, 20, 50] will be used |
| `@Input() pageSize: number`                     | Default number of elements to display on a page. If none are specified, 10 will be displayed |


### Implementation Example

HTML:
      `<ign-card-section>
        <ign-data-table-container
          [dataSource]="dataSource"
          [pageIndex]="dataSource.pageIndex$ | async"
          [totalElements]="dataSource.sourceLength$ | async"
          (paginatorEvents$)="handlePageEvents($event)">

          <mat-table [dataSource]="dataSource" class="data-table">

            <!-- Name Column -->
            <ng-container cdkColumnDef="name">
              <mat-header-cell *cdkHeaderCellDef class="table-header-cell cell-grow5">{{ 'PEOPLE.POSITION' | translate }}</mat-header-cell>
              <mat-cell *cdkCellDef="let row" class="table-cell cell-grow5">
                <div>{{row.name}}</div>
                <mat-error style="margin-top: 6px;" *ngIf="row.errorCount > 0">
                  {{row.errorCount}} {{ ((row.errorCount === 1) ? 'ACTIVATION.ERROR' : 'ACTIVATION.ERRORS') | translate}}
                </mat-error>
              </mat-cell>
            </ng-container>

            <!-- Code Column -->
            <ng-container cdkColumnDef="code">
              <mat-header-cell *cdkHeaderCellDef class="table-header-cell cell-grow2">{{ 'COMMON.CODE' | translate }}</mat-header-cell>
              <mat-cell *cdkCellDef="let row" class="table-cell cell-grow2"> {{row.code}} </mat-cell>
            </ng-container>

            <!-- Job Column -->
            <ng-container cdkColumnDef="positionTemplate">
              <mat-header-cell *cdkHeaderCellDef class="table-header-cell cell-grow5">{{ 'PEOPLE.JOB' | translate }}</mat-header-cell>
              <mat-cell *cdkCellDef="let row" class="table-cell cell-grow5"> {{ row.positionTemplate?.name}}</mat-cell>
            </ng-container>

            <!-- Location Column -->
            <ng-container cdkColumnDef="workLocation">
              <mat-header-cell *cdkHeaderCellDef class="table-header-cell cell-grow5">{{ 'PEOPLE.LOCATION' | translate }}</mat-header-cell>
              <mat-cell *cdkCellDef="let row" class="table-cell cell-grow5"> {{ row.workLocation?.name}}</mat-cell>
            </ng-container>

            <!-- Action Column -->
            <ng-container cdkColumnDef="action">
              <mat-header-cell *cdkHeaderCellDef class="table-header-cell cell-grow1"></mat-header-cell>
              <mat-cell *cdkCellDef="let row" class="table-cell cell-grow1" (click)="onEdit(row.recordId)">
                <mat-icon>edit</mat-icon>
              </mat-cell>
            </ng-container>

            <mat-header-row *cdkHeaderRowDef="displayedColumns" class="table-header-row"></mat-header-row>
            <mat-row *cdkRowDef="let row; columns: displayedColumns;" class="table-row"></mat-row>

          </mat-table>

        </ign-data-table-container>
      </ign-card-section>`