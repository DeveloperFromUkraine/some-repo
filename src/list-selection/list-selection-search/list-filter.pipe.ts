import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

export interface IFilterProvider {
  readonly filterInput$: Observable<string>;
}

@Pipe({ name: 'listFilter' })
export class ListFilterPipe implements PipeTransform {
  // assumes array of entities
  transform<T>(
    values$: Observable<T[]>, 
    filterProvider: IFilterProvider, 
    matchFn: (searchTerm: string, value: T) => boolean): any {

    return Observable
    .combineLatest(values$.startWith([]),filterProvider.filterInput$.startWith(''))
    .map(([values, searchTerm]) => values.filter(value => matchFn(searchTerm, value)));
  }

  test<T>(searchTerm: string, value: T) {
    return true;
  }
}
