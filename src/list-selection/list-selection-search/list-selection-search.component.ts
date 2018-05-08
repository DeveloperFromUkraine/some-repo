import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/util/pipe';
import { map, distinctUntilChanged, skipWhile, share } from 'rxjs/operators';
import { IFilterProvider } from './list-filter.pipe';

@Component({
  selector: 'ign-list-selection-search',
  templateUrl: './list-selection-search.html',
  styleUrls: ['./list-selection-search.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ListSelectionSearchComponent implements IFilterProvider {
  searchCtrl: FormControl = new FormControl();
  filterInput$: Observable<string>;

  constructor() {
    this.filterInput$ = this.searchCtrl.valueChanges.pipe(
      map((val: string) => val.trim()),
      distinctUntilChanged(),
      skipWhile(val => !val),
      share()
    );
  }
}
