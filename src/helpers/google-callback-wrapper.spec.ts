import { GoogleCallbackWrapper } from './google-callback-wrapper';
import { NgZone } from '@angular/core';

describe('GoogleCallbackWrapper', () => {
  let zone: NgZone;
  let service: GoogleCallbackWrapper;
  let serviceCall: any;

  beforeEach(() => {
    zone = new NgZone({});
    service = new GoogleCallbackWrapper(zone);
    serviceCall = jest.fn();
  });

  it('should call the underlying service with the query', () => {
    const wrapper = service.wrap(serviceCall);
    const query = {};
    const results$ = wrapper(query);

    expect(serviceCall).not.toHaveBeenCalled();

    const onNext = jest.fn();;
    const onError = jest.fn();

    results$.subscribe(onNext, onError);

    expect(onError).not.toHaveBeenCalled();
    expect(serviceCall).toHaveBeenCalledWith(query, jasmine.any(Function));
  });

  it('should return an error on the stream if called without a required property', () => {
    const wrapper = service.wrap(serviceCall, ['test']);
    const results$ = wrapper({});
    const onNext = jest.fn();

    results$.subscribe(onNext, err => {
      expect(err.message).toBe('Request property "test" must not be empty');
    });

    expect(onNext).not.toHaveBeenCalled();
  });

  it('should return a stream of results as provided by the underlying service', () => {
    const results: string[] = ['foo', 'bar'];
    const wrapper = service.wrap(serviceCall);

    jest.spyOn(zone, 'run').mockImplementation((runnable: Function) => runnable());
    serviceCall.mockImplementation((request: any, callback: Function) => {
      callback(results, 'OK');
    });

    const results$ = wrapper({});
    const onNext = jest.fn();
    const onError = jest.fn();
    const onComplete = jest.fn();

    results$.subscribe(onNext, onError, onComplete);

    expect(onNext).toHaveBeenCalledWith(results[0]);
    expect(onNext).toHaveBeenCalledWith(results[1]);
    expect(onError).not.toHaveBeenCalled();
    expect(onComplete).toHaveBeenCalled();
  });
});
