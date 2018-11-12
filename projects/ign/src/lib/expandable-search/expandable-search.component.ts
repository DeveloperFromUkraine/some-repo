import { Component, ElementRef, Output, Input, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ign-expandable-search',
  templateUrl: './expandable-search.html',
  styleUrls: ['./expandable-search.scss'],
})
export class ExpandableSearchComponent {
  @ViewChild('searchInput') searchInput: ElementRef;

  @Output() searchCriteria$ = new BehaviorSubject<any>({});
  @Input() focusOnSearchExpanded = true;
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
      if (this.focusOnSearchExpanded) {
        this.searchInput.nativeElement.focus();
      }
    }
  }
}
