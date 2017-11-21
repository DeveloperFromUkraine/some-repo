import { NgModule } from '@angular/core';

import { GeocoderService } from './geocoder.service';
import { GeocoderProvider } from './geocoder.provider';
import { AddressTransformService } from './address-transform.service';
import { GoogleCallbackWrapper } from '../helpers/google-callback-wrapper';

@NgModule({
  providers: [
    GeocoderProvider,
    GeocoderService,
    AddressTransformService,
    GoogleCallbackWrapper,
  ],
})
export class GeocoderModule {}
