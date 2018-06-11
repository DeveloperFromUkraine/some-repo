import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ign-expandable-search',
  templateUrl: './expandable-search.html',
  styleUrls: ['./expandable-search.scss'],
})
export class ExpandableSearchComponent {
  @ViewChild('searchInput') searchInput: ElementRef;

  @Output() searchCriteria$ = new BehaviorSubject<any>({});
  searchExpanded = false;

  emitSearchEvents() {
    this.searchCriteria$.next({
      searchBy: this.searchInput.nativeElement.value,
    });
  }

  handleClick() {
    if (this.searchExpanded) {
      this.searchExpanded = false;
      this.searchInput.nativeElement.value = '';
      this.emitSearchEvents();
    } else {
      this.searchExpanded = true;
    }
  }
}
