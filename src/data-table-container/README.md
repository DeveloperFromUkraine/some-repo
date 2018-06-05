# Data Table Container

A container to house a Material data table. This container provides a paginator at the container's footer.

## API
  ### Selector
    * ign-data-table-container

  ### Export As
    * DataTableContainerComponent

  ### Properties 
    * `@Input() dataSource: MatTableDataSource<any>`
      * Data being used for Material data table 

    * `@Input() pageIndex: number`
      * The index of the page

    * `@Input() totalElements: number`
      * The total elements in a data table 

    * `@Input() pageSizeOptions: number[]`
      * Page size options to be made available within the paginator. If none are provided, [5, 10, 15, 20, 50] will be used

    * `@Input() pageSize: number`
      * Default number of elements to display on a page. If none are specified, 10 will be displayed
      
    * `@Output() paginatorEvents$: BehaviorSubject<any>({});`
      * Emits corresponding events from paginator interaction


## Implementation HTML
  <div class="example-container mat-elevation-z8">
    <ign-data-table-container [dataSource]="dataSource">
        <mat-table #table [dataSource]="dataSource">
          <!--- Note that these columns can be defined in any order.
                The actual rendered columns are set as a property on the row definition" -->
            <!-- Name Column -->
            <ng-container matColumnDef="name">
            <mat-header-cell \*matHeaderCellDef> Name </mat-header-cell>
            <mat-cell \*matCellDef="let element"> {{element.name}} </mat-cell>
            </ng-container>             
          <!-- Position Column -->
          <ng-container matColumnDef="position">
            <mat-header-cell \*matHeaderCellDef> Position </mat-header-cell>
            <mat-cell \*matCellDef="let element"> {{element.position}} </mat-cell>
          </ng-container>              
          <!-- Type Column -->
          <ng-container matColumnDef="type">
            <mat-header-cell \*matHeaderCellDef> Type </mat-header-cell>
            <mat-cell \*matCellDef="let element"> {{element.type}} </mat-cell>
          </ng-container>
          <mat-header-row \*matHeaderRowDef="displayedColumns"></mat-header-row>
          <mat-row \*matRowDef="let row; columns: displayedColumns;"></mat-row>
        </mat-table>
      </ign-data-table-container>
  </div>

## Implementation TS
  displayedColumns = ['name', 'position', 'type'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  export interface Element {
    name: string;
    position: string;
    type: string;
  }

let ELEMENT_DATA: Element[] = [
    {name: 'Maham Boghani', position: 'Software Engineer', type: 'Human'},
    {name: 'Watson', position: 'Artificial Intelligence', type: 'Computer'},
    {name: 'Andy Avalos', position: 'Electrical Engineer', type: 'Human'},
    {name: 'Jensen', position: 'Director of Sleep', type: 'House Cat'},
    {name: 'Mariah Avalos', position: 'Software Engineer', type: 'Introvert'},
    {name: 'Emma Bear', position: 'Destroyer Of String', type: 'House Cat'},
    {name: 'Uchenna Ohaeto', position: 'Software Engineer', type: 'Human'},
    {name: 'Dennis', position: 'Being Repressed', type: 'Human'},
    {name: 'Sophia', position: 'Home Security', type: 'Dog'},
    {name: 'Brian Mahecha', position: 'Software Test Engineer', type: 'Human'},
    {name: 'Spock', position: 'First Officer, USS Enterprise', type: 'Vulcan'},
    {name: 'Daniel Weisberg', position: 'Software Engineer', type: 'Human'},
    {name: 'Inigo Montoya', position: 'Seeking Revenge', type: 'Human'},
    {name: 'Miguel Conde', position: 'Software Engineer', type: 'Human'},
    {name: 'Nikola Tesla', position: 'Inventor', type: 'Human'},
  
];