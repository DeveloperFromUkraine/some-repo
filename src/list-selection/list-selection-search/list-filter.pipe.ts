import { Pipe, PipeTransform } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

export interface IFilterProvider {
  readonly filterInput$: Observable<string>;
}

@Pipe({ name: 'listFilter' })
export class ListFilterPipe implements PipeTransform {
  // assumes array of entities
  transform<T>(
    values$: Observable<T[]>,
    filterProvider: IFilterProvider,
    matchFn: (searchTerm: string, value: T) => boolean
  ): any {
    return combineLatest(
      values$.pipe(startWith([])),
      filterProvider.filterInput$.pipe(startWith(''))
    ).pipe(map(([values, searchTerm]) => values.filter(value => matchFn(searchTerm, value))));
  }
}
