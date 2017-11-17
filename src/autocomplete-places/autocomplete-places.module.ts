import { NgModule } from '@angular/core';

import { GeocoderModule } from '../geocoder/geocoder.module';
import { AutocompletePlacesComponent } from './autocomplete-places.component';
import { AutocompletePlacesService } from './autocomplete-places.service';
import { AutocompleteServiceProvider } from './autocomplete-service.provider';
import { GoogleCallbackWrapper } from '../helpers/google-callback-wrapper';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material';

export const imports = [GeocoderModule, MatAutocompleteModule, ReactiveFormsModule, CommonModule];

export const declarations = [AutocompletePlacesComponent];

@NgModule({
  imports,
  declarations,
  exports: declarations,
  providers: [
    AutocompletePlacesService,
    AutocompleteServiceProvider,
    GoogleCallbackWrapper,
  ],
})
export class AutocompletePlacesModule {}
