// tslint:disable:no-typeof-undefined

import { InjectionToken, Provider } from '@angular/core';
import { MockAutocompleteService } from './autocomplete-service.mock';

export const AutocompleteService = new InjectionToken<google.maps.places.AutocompleteService>(
  'AutocompleteService'
);

export function autocompleteServiceFactory() {
  if (typeof google === 'undefined') {
    console.error('global "google" was undefined; AutocompleteService has been stubbed');
    return new MockAutocompleteService();
  }

  return new google.maps.places.AutocompleteService();
}

export const AutocompleteServiceProvider: Provider = {
  provide: AutocompleteService,
  useFactory: autocompleteServiceFactory,
  deps: [],
};
