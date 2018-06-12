import { Component, ElementRef, Input, Output, ViewChild, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TranslationPipe } from '../localization/translation.pipe';

@Component({
  selector: 'ign-list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.scss'],
})
export class ListSearchComponent {
  @ViewChild('searchInput') searchInput: ElementRef;

  @Input() ariaLabel;
  @Output() searchCriteria$ = new BehaviorSubject<any>({});

  constructor(private _cdr: ChangeDetectorRef) {
    const pipe = new TranslationPipe(this._cdr);
    this.ariaLabel = pipe.transform('LIST_SEARCH');
  }

  emitSearchEvents() {
    this.searchCriteria$.next({
      searchBy: this.searchInput.nativeElement.value,
    });
  }
}
