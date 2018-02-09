# Expandable Search

A search component which displays a search icon, which, when clicked, expands to display an input field with a button to go back
to exit search and a button within the input field to clear search text.

Selector: `ign-expandable-search`

## Properties

| Name                                              | Description |
|---------------------------------------------------|-------------|
| `@Output() searchCriteria$: BehaviorSubject<any>` | Outputs search values for consumers to subscribe to |

### Implementation Example

HTML:
      `<ign-card-section>
               <ign-data-table-container
                 [dataSource]="dataSource"
                 [pageIndex]="dataSource.pageIndex$ | async"
                 [totalElements]="dataSource.sourceLength$ | async"
                 (paginatorEvents$)="handlePageEvents($event)">

                 <ign-right-align-container>
                   <ign-expandable-search></ign-expandable-search>
                   <button
                     mat-icon-button>
                     <mat-icon>
                       more_vert
                     </mat-icon>
                   </button>
                   <button
                     mat-icon-button>
                     <mat-icon>
                       filter_list
                     </mat-icon>
                   </button>
                 </ign-right-align-container>
                 <mat-table
                   [dataSource]="dataSource"
                   matSort
                   class="data-table">
                   <!-- Name Column -->
                   <ng-container matColumnDef="name">
                     <mat-header-cell
                       *matHeaderCellDef
                       mat-sort-header
                       class="table-header-cell cell-grow5"
                     >
                       {{ 'PEOPLE.POSITION' | translate }}
                     </mat-header-cell>
                     <mat-cell
                       *matCellDef="let row"
                       class="table-cell cell-grow5"
                     >
                       <div>{{row.name}}</div>
                       <mat-error style="margin-top: 6px;" *ngIf="row.errorCount > 0">
                         {{row.errorCount}} {{ ((row.errorCount === 1) ? 'ACTIVATION.ERROR' : 'ACTIVATION.ERRORS') | translate}}
                       </mat-error>
                     </mat-cell>
                   </ng-container>

                   <!-- Code Column -->
                   <ng-container matColumnDef="code">
                     <mat-header-cell
                       *matHeaderCellDef
                       mat-sort-header
                       class="table-header-cell cell-grow2"
                     >
                       {{ 'COMMON.CODE' | translate }}
                     </mat-header-cell>
                     <mat-cell
                       *matCellDef="let row"
                       class="table-cell cell-grow2"
                     >
                       {{row.code}}
                     </mat-cell>
                   </ng-container>

                   <!-- Job Column -->
                   <ng-container matColumnDef="positionTemplate">
                     <mat-header-cell
                       *matHeaderCellDef
                       mat-sort-header
                       class="table-header-cell cell-grow5"
                     >
                       {{ 'PEOPLE.JOB' | translate }}
                     </mat-header-cell>
                     <mat-cell
                       *matCellDef="let row"
                       class="table-cell cell-grow5"
                     >
                       {{ row.positionTemplate?.name}}
                     </mat-cell>
                   </ng-container>

                   <!-- Location Column -->
                   <ng-container matColumnDef="workLocation">
                     <mat-header-cell
                       *matHeaderCellDef
                       mat-sort-header
                       class="table-header-cell cell-grow5"
                     >
                       {{ 'PEOPLE.LOCATION' | translate }}
                     </mat-header-cell>
                     <mat-cell
                       *matCellDef="let row"
                       class="table-cell cell-grow5"
                     >
                       {{ row.workLocation?.name}}
                     </mat-cell>
                   </ng-container>

                   <!-- Action Column -->
                   <ng-container matColumnDef="action">
                     <mat-header-cell *matHeaderCellDef class="table-header-cell cell-grow1"></mat-header-cell>
                     <mat-cell *matCellDef="let row" class="table-cell cell-grow1" (click)="onEdit(row.recordId)">
                       <mat-icon>edit</mat-icon>
                     </mat-cell>
                   </ng-container>

                   <mat-header-row *cdkHeaderRowDef="displayedColumns" class="table-header-row"></mat-header-row>
                   <mat-row *cdkRowDef="let row; columns: displayedColumns;" class="table-row"></mat-row>

                 </mat-table>
               </ign-data-table-container>
             </ign-card-section>`