import { Injectable, Inject } from '@angular/core';

import { Observable, Observer } from 'rxjs/Rx';

import { GoogleCallbackWrapper } from '../helpers/google-callback-wrapper';
import { Geocoder } from './geocoder.provider';

declare var google;

@Injectable()
export class GeocoderService implements google.maps.Geocoder {
  constructor(
    @Inject(Geocoder) private service: google.maps.Geocoder,
    private callbackWrapper: GoogleCallbackWrapper
  ) {
    this.geocode = callbackWrapper.wrap(service.geocode.bind(service), ['address']);
  }

  geocode: (request: google.maps.GeocoderRequest) => Observable<google.maps.GeocoderResult>;
}
