import {
  Component, ElementRef, Output, Input, ViewChild, ChangeDetectorRef,
  ChangeDetectionStrategy, EventEmitter, OnInit
} from '@angular/core';
import {TranslationPipe} from '../../../../../src/localization/translation.pipe';

@Component({
  selector: 'ign-expandable-search',
  templateUrl: './expandable-search.html',
  styleUrls: ['./expandable-search.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpandableSearchComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('searchButton', {read: ElementRef}) searchButton: ElementRef;

  @Output() searchCriteria$ = new EventEmitter();
  @Input() focusOnSearchExpanded = true;
  translationPipe: TranslationPipe;
  searchExpanded = false;
  searchButtonAriaLabel: string;
  searchInputTabIndex: number;

  translatedClose: string;
  translatedSearch: string;

  constructor(changeRef: ChangeDetectorRef) {
    this.translationPipe = new TranslationPipe(changeRef);
  }

  ngOnInit() {
    this.translatedClose = this.translationPipe.transform('CLOSE');
    this.translatedSearch = this.translationPipe.transform('SEARCH');

    if (this.searchButton) {
      this.searchButtonAriaLabel =
        this.searchExpanded ? this.translatedClose : this.translatedSearch;
      }

    if (this.searchInput) {
      this.searchInputTabIndex = this.searchExpanded ? 0 : -1;
    }
  }

  emitSearchEvents() {
    this.searchCriteria$.next({
      searchBy: this.searchInput.nativeElement.value,
    });
  }

  handleClick() {
    if (this.searchExpanded) {
      this.closeSearchBar();
    } else {
      this.openSearchBar();
    }
  }

  openSearchBar() {
    this.searchExpanded = true;
    this.searchButtonAriaLabel = this.translatedClose;
    this.searchInputTabIndex = 0;

    if (this.focusOnSearchExpanded) {
      this.searchInput.nativeElement.focus();
    }
  }

  closeSearchBar() {
    this.searchExpanded = false;
    this.searchButtonAriaLabel = this.translatedSearch;
    this.searchInputTabIndex = -1;
    this.searchInput.nativeElement.value = '';
    this.emitSearchEvents();
  }

  clearSearch() {
    this.searchInput.nativeElement.value = '';
    this.emitSearchEvents();
  }
}
