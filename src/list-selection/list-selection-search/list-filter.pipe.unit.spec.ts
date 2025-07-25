import { ListFilterPipe } from './index';
import { Subject, of as observableOf } from 'rxjs';

describe('List Filter', () => {
  let valueArray: string[] = ['1', '2', '3'];
  let pipe: ListFilterPipe;
  let values$;
  let filterInput$;
  let filterProvider;
  let matchFn;
  let spy;

  beforeEach(() => {
    pipe = new ListFilterPipe();
    values$ = observableOf(valueArray);
    filterInput$ = new Subject<string>();
    filterProvider = { filterInput$ };
    matchFn = (searchTerm: string, value: string) => value !== searchTerm;
    spy = jest.fn();

    pipe.transform(values$, filterProvider, matchFn).subscribe(spy);
  });

  it('should have a call length of 1 if no searchterms are emitted', () => {
    expect(spy.mock.calls.length).toBe(1);
  });

  it('should not filter values if no searchterms are emitted', () => {
    expect(spy.mock.calls[0][0]).toEqual(valueArray);
  });

  it('should filter values based on emitted searchterm', () => {
    filterInput$.next('2');

    expect(spy.mock.calls.length).toBe(2);
    expect(spy.mock.calls[1][0]).toEqual(['1', '3']);
  });

  it('should not filter if incorrect filter term type is passed', () => {
    filterInput$.next(2);

    expect(spy.mock.calls.length).toBe(2);
    expect(spy.mock.calls[1][0]).toEqual(valueArray);
  });
});
