import { AutocompletePlacesComponent } from './autocomplete-places.component';
import { Subject } from 'rxjs/Subject';
import { AddressTransformService } from '../geocoder/address-transform.service';

describe('AutocompletePlacesComponent', () => {
  let component: AutocompletePlacesComponent;

  let placePredictions$: Subject<Partial<google.maps.places.AutocompletePrediction>>;
  let placesService: any;
  let geocoderResults$: Subject<Partial<google.maps.GeocoderResult>>;
  let geocoderService: any;
  let valueChanges$: Subject<any>;
  let actionBuffer$: Subject<any>;
  let addressTransformService: AddressTransformService;

  beforeEach(() => {
    placePredictions$ = new Subject<google.maps.places.AutocompletePrediction>();
    placesService = {
      getPlacePredictions: jest.fn(() => placePredictions$),
    };

    geocoderResults$ = new Subject<google.maps.GeocoderResult>();
    geocoderService = {
      geocode: jest.fn(() => geocoderResults$),
    };

    addressTransformService = new AddressTransformService();

    component = new AutocompletePlacesComponent(
      placesService,
      geocoderService,
      addressTransformService
    );

    valueChanges$ = new Subject();
    Object.defineProperty(component.autocompleteCtrl, 'valueChanges', { get: jest.fn(() => valueChanges$)} );

    actionBuffer$ = new Subject();
    component.actionBuffer = <any>actionBuffer$;

    component.ngOnInit();
  });

  it('should call the places service with input', () => {
    const onNext = jest.fn();
    const onError = jest.fn();
    component.suggestions$.subscribe(onNext, onError);

    const TEST_ADDRESS = '2250 Commerce Pkwy, Weston FL';

    valueChanges$.next(TEST_ADDRESS);
    valueChanges$.complete();

    expect(placesService.getPlacePredictions).toHaveBeenCalledWith({
      input: TEST_ADDRESS,
    });

    placePredictions$.next({ description: 'FAKE ADDRESS 1' });
    placePredictions$.next({ description: 'FAKE ADDRESS 2' });
    placePredictions$.next({ description: 'FAKE ADDRESS 3' });
    placePredictions$.complete();

    expect(onNext).toHaveBeenCalledWith([
      { description: 'FAKE ADDRESS 1' },
      { description: 'FAKE ADDRESS 2' },
      { description: 'FAKE ADDRESS 3' },
    ]);
    expect(onError).not.toHaveBeenCalled();
  });

  it('should emit an empty suggestions list if the places service throws', () => {
    const onNext = jest.fn();
    const onError = jest.fn();
    component.suggestions$.subscribe(onNext, onError);

    const TEST_ADDRESS = '2000 Commerce Pkwy, Weston FL';

    placePredictions$.error('oh no');

    valueChanges$.next(TEST_ADDRESS);
    valueChanges$.complete();

    expect(onNext).toHaveBeenCalledWith([]);
    expect(onError).not.toHaveBeenCalled();
  });

  it('should call the geocoder with input', () => {
    const onNext = jest.fn();
    const onError = jest.fn();
    component.result$.subscribe(onNext, onError);

    const address = {
      city: 'Weston',
      country: {
        code: 'USA',
      },
      line1: '2250 North Commerce Parkway',
      line2: '',
      postalCode: '33326',
      subdivision: {
        code: 'FL',
      },
    };

    jest.spyOn(addressTransformService, 'addressFromGeocoderResult').mockImplementation(() => address);

    component.autocompleteCtrl.setValue('test address');

    component.actionBuffer.next(true);
    component.actionBuffer.complete();

    expect(geocoderService.geocode).toHaveBeenCalledWith({ address: 'test address' });

    geocoderResults$.next({ formatted_address: 'some test' });
    geocoderResults$.complete();

    expect(addressTransformService.addressFromGeocoderResult).toHaveBeenCalledWith({
      formatted_address: 'some test',
    });
    expect(onNext).toHaveBeenCalledWith(address);
  });

  it('should return null result on geocode error', () => {
    const onNext = jest.fn();
    const onError = jest.fn();
    component.result$.subscribe(onNext, onError);

    geocoderResults$.error('oh no');

    component.actionBuffer.next(true);
    component.actionBuffer.complete();

    expect(onNext).toHaveBeenCalledWith(null);
  });
});
