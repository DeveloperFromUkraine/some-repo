*** HTML ***

# Data Table Container

## Use
A container to house a Material data table. This container provides a paginator at the container's footer.

## Sample
<mat-tab-group>
    <mat-tab label="Component Sample">
        <div class="tab-height">
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
        </div></mat-tab>
    <mat-tab label="HTML"><div class="tab-height">
        <table style="width:100%">
            <p>&lt;div class="example-container mat-elevation-z8"&gt; </p>
            <p>&nbsp;&lt;ign-data-table-container [dataSource]="dataSource"&gt;</p>
            <p>&nbsp;&nbsp;&lt;mat-table #table [dataSource]="dataSource"&gt;</p>
            <p>&nbsp;&nbsp; &lt;!--- Note that these columns can be defined in any order.</p>
            <p>&nbsp;&nbsp; The actual rendered columns are set as a property on the row definition" --&gt;</p>
            <p>&nbsp;&nbsp; &lt;!-- Name Column --&gt;</p>
            <p>&nbsp;&nbsp; &lt;ng-container matColumnDef="name"&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;mat-header-cell \*matHeaderCellDef&gt; Name &lt;/mat-header-cell&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;mat-cell \*matCellDef="let element"&gt; element.name &lt;/mat-cell&gt;</p>
            <p>&nbsp;&nbsp; &lt;/ng-container&gt;</p>
            <p>&nbsp;&nbsp; &lt;!-- Position Column --&gt;</p>
            <p>&nbsp;&nbsp; &lt;ng-container matColumnDef="position"&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;mat-header-cell \*matHeaderCellDef&gt; Position &lt;/mat-header-cell&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;mat-cell \*matCellDef="let element"&gt; element.position &lt;/mat-cell&gt;</p>
            <p>&nbsp;&nbsp; &lt;/ng-container&gt;</p>
            <p>&nbsp;&nbsp; &lt;!-- Type Column --&gt;</p>
            <p>&nbsp;&nbsp; &lt;ng-container matColumnDef="type"&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;mat-header-cell *matHeaderCellDef&gt; Type &lt;/mat-header-cell&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;mat-cell \*matCellDef="let element"&gt; element.type &lt;/mat-cell&gt;</p>
            <p>&nbsp;&nbsp; &lt;mat-header-row \*matHeaderRowDef="displayedColumns"&gt;&lt;/mat-header-row&gt;</p>
            <p>&nbsp;&nbsp; &lt;mat-row \*matRowDef="let row; columns: displayedColumns;"&gt;&lt;/mat-row&gt;</p>
            <p>&nbsp;&nbsp;&lt;/mat-table&gt;</p>
            <p>&nbsp;&lt;/ign-data-table-container&gt;</p>
            <p>&lt;/div&gt;</p> 
        </table>
    </div></mat-tab>
</mat-tab-group>

## Content
* @Input() dataSource: MatTableDataSource 
    * Data being used for Material data table
* @Input() pageIndex: number                
    *  The index of the page 
* @Input() totalElements: number               
    * The total elements in a data table 
* @Input() pageSizeOptions: number[]            
    * Page size options to be made available within the paginator. 
    If none are provided, [5, 10, 15, 20, 50] will be used 
* @Input() pageSize: number                    
    * Default number of elements to display on a page. If none are specified, 10 will be displayed

## Style
* No styling is required for this component.

*** TypeScript *** 

 displayedColumns = ['name', 'position', 'type'];
 dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

*** ExternalTypeScript ***

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
*** Imports ***

import { MatTableDataSource } from '@angular/material';