import { Injectable, Inject } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AutocompleteService } from './autocomplete-service.provider';
import { GoogleCallbackWrapper } from '../helpers/google-callback-wrapper';

declare var google;

@Injectable()
export class AutocompletePlacesService implements google.maps.places.AutocompleteService {
  constructor(
    @Inject(AutocompleteService) private service: google.maps.places.AutocompleteService,
    private callbackWrapper: GoogleCallbackWrapper
  ) {
    this.getPlacePredictions = callbackWrapper.wrap(service.getPlacePredictions.bind(service), [
      'input',
    ]);
    this.getQueryPredictions = callbackWrapper.wrap(service.getQueryPredictions.bind(service), [
      'input',
    ]);
  }

  getPlacePredictions: (
    request: google.maps.places.AutocompletionRequest
  ) => Observable<google.maps.places.AutocompletePrediction>;

  getQueryPredictions: (
    request: google.maps.places.QueryAutocompletionRequest
  ) => Observable<google.maps.places.QueryAutocompletePrediction>;
}
