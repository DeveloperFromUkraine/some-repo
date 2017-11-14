export class MockAutocompleteService implements google.maps.places.AutocompleteService {
  getPlacePredictions(request: any, callback: Function) {
    callback([], 'ZERO_RESULTS');
  }

  getQueryPredictions(request: any, callback: Function) {
    callback([], 'ZERO_RESULTS');
  }
}
