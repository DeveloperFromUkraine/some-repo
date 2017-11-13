import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/skipWhile';
import 'rxjs/add/operator/share';
import { isEmpty } from 'lodash';
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
    this.filterInput$ = this.searchCtrl.valueChanges
      .map((val: string) => val.trim())
      .distinctUntilChanged()
      .skipWhile(isEmpty)
      .share();
  }
}
