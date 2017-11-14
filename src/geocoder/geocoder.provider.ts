// tslint:disable:no-typeof-undefined

import { InjectionToken, Provider } from '@angular/core';
import { MockGeocoder } from './geocoder.mock';

export const Geocoder = new InjectionToken<google.maps.Geocoder>('Geocoder');

export function geocoderFactory() {
  if (typeof google === 'undefined') {
    console.error('global "google" was undefined; Geocoder has been stubbed');
    return new MockGeocoder();
  }

  return new google.maps.Geocoder();
}

export const GeocoderProvider: Provider = {
  provide: Geocoder,
  useFactory: geocoderFactory,
  deps: [],
};
