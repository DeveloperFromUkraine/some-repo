import { Component, ElementRef, Input, Output, ViewChild, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslationPipe } from '../localization/translation.pipe';

@Component({
  selector: 'ign-persistent-search',
  templateUrl: './persistent-search.component.html',
  styleUrls: ['./persistent-search.component.css'],
})
export class PersistentSearchComponent {
  @ViewChild('searchInput') searchInput: ElementRef;

  @Input() placeholder: string;
  @Output() searchCriteria$ = new BehaviorSubject<any>({});

  constructor(private _cdr: ChangeDetectorRef) {
    const pipe = new TranslationPipe(this._cdr);
    this.placeholder = pipe.transform('SEARCH');
  }

  emitSearchEvents() {
    this.searchCriteria$.next({
      searchBy: this.searchInput.nativeElement.value,
    });
  }
}
