import { Component, Input, Output, ViewChild, AfterViewInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'ign-data-table-container',
  templateUrl: 'data-table-container.component.html',
  styleUrls: ['./data-table-container.scss'],
})
export class DataTableContainerComponent implements AfterViewInit {
  @Input() dataSource: MatTableDataSource<any>;
  @Input() pageIndex: number;
  @Input() totalElements: number;
  @Input() pageSizeOptions: number[];
  @Input() pageSize: number;

  @Output() paginatorEvents$ = new BehaviorSubject<any>({});

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    // Set the paginator after the view init since this component will
    // be able to query its view for the initialized paginator.
    this.dataSource.paginator = this.paginator;
  }

  emitPageEvents(event: any) {
    this.paginatorEvents$.next(event);
  }
}
