import { Observable, Observer } from 'rxjs/Rx';
import { Injectable, NgZone } from '@angular/core';
import { isEmpty } from 'lodash';

export class CallbackRequestError extends Error {
  type: any;

  constructor(message: string) {
    super(message);
    this.type = CallbackRequestError;
  }
}

@Injectable()
export class GoogleCallbackWrapper {
  constructor(private zone: NgZone) {}

  wrap<T, U>(
    serviceCall: (request: T, callback: (results: U[], status: any) => void) => void,
    requiredProps: string[] = []
  ): (request: T) => Observable<U> {
    return (request: T): Observable<U> =>
      Observable.create((observer: Observer<U>) => {
        const missingProp = requiredProps.find(prop => isEmpty(request[prop]));
        if (missingProp) {
          observer.error(
            new CallbackRequestError(`Request property "${missingProp}" must not be empty`)
          );
          return;
        }

        serviceCall(request, (results, status) => {
          this.zone.run(() => {
            for (const result of results || []) {
              observer.next(result);
            }

            observer.complete();
          });
        });
      });
  }
}
