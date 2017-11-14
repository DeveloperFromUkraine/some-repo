import { Address } from './types';
import { negate, isEmpty, flatMap } from 'lodash';

export class AddressTransformService {
  addressFromGeocoderResult(result: google.maps.GeocoderResult): Address {
    if (!result) {
      return null;
    }

    const getAddressComponent = this.getAddressComponent.bind(this, result.address_components);

    let country = getAddressComponent('country', 'short_name');
    if (country === 'US') {
      country = 'USA';
    }

    let line2 = getAddressComponent('subpremise');
    if (line2) {
      line2 = `#${line2}`;
    }

    return {
      city: getAddressComponent('locality'),
      country: {
        code: country,
      },
      line1: [getAddressComponent('street_number'), getAddressComponent('route')]
        .filter(negate(isEmpty))
        .join(' '),
      line2,
      postalCode: getAddressComponent('postal_code', 'short_name'),
      subdivision: {
        code: getAddressComponent('administrative_area_level_1', 'short_name'),
      },
    };
  }

  getDisplayString(address: Address): string {
    // TODO: generalize for non-US addresses

    if (!address) {
      return '';
    }

    return flatMap(
      [
        [address.line1, address.line2],
        [address.city],
        [address.subdivision && address.subdivision.code, address.postalCode],
        [address.country && address.country.code],
      ],
      el => el.filter(negate(isEmpty)).join(' ')
    ).join(', ');
  }

  private getAddressComponent(
    addressComponents: google.maps.GeocoderAddressComponent[] = [],
    targetType = '',
    nameType = 'long_name'
  ): string {
    const res = addressComponents.find(addressComponent => {
      const isFound = addressComponent.types.find(type => type === targetType);
      return !!isFound;
    });

    return (res && res[nameType]) || '';
  }
}
