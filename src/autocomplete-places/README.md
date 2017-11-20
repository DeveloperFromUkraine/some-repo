# Autocomplete Places

Autocomplete and geocoding via Google APIs

## Usage

Drop `nu-autocomplete-places` into your reactive or template-driven form and use
it as you'd use any other form element.

If you need access to them, `suggestions$` and `result$` are Observables
available on the AutocompletePlacesComponent, which are a list of suggestions
from the places API and a geocoded result from the geocoder API, respectively.
