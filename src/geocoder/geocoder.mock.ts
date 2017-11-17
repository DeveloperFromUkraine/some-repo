declare var google;

export class MockGeocoder implements google.maps.Geocoder {
  geocode(request: any, callback: Function) {
    callback([], 'ZERO_RESULTS');
  }
}
