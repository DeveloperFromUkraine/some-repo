import { Component, ElementRef, Input, Output, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'ign-list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.scss'],
})
export class ListSearchComponent {
  @ViewChild('searchInput') searchInput: ElementRef;

  @Input() ariaLabel = 'LIST_SEARCH';
  @Output() searchCriteria$ = new BehaviorSubject<any>({});

  emitSearchEvents() {
    this.searchCriteria$.next({
      searchBy: this.searchInput.nativeElement.value,
    });
  }
}
