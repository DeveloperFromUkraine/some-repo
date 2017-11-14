import {
  Component,
  ViewChild,
  forwardRef,
  Input,
  Inject,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { MatAutocomplete } from '@angular/material';
import { isEmpty } from 'lodash';

import { AutocompletePlacesService } from './autocomplete-places.service';
import { GeocoderService } from '../geocoder/geocoder.service';
import { AddressTransformService } from '../geocoder/address-transform.service';
import { Address } from '../geocoder/types';
import { CallbackRequestError } from '../helpers/google-callback-wrapper';

@Component({
  selector: 'nu-autocomplete-places',
  templateUrl: './autocomplete-places.html',
  styleUrls: ['./autocomplete-places.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompletePlacesComponent),
      multi: true,
    },
  ],
})
export class AutocompletePlacesComponent implements ControlValueAccessor, OnInit {
  @ViewChild(MatAutocomplete) matAutocomplete: MatAutocomplete;
  @Input() displayName: string;

  suggestions$: Observable<google.maps.places.AutocompletePrediction[]>;
  result$: Observable<Address>;
  autocompleteCtrl: FormControl = new FormControl();
  actionBuffer = new EventEmitter(true);
  private propagateChange = (_: any) => {};
  private propagateTouched = () => {};
  private propagateValidatorChange = () => {};

  constructor(
    private autocompleteService: AutocompletePlacesService,
    private geocoder: GeocoderService,
    private addressService: AddressTransformService,
  ) {}

  ngOnInit() {
    const input$ = this.autocompleteCtrl.valueChanges
      .map((val: string) => val.trim())
      .distinctUntilChanged()
      .skipWhile(isEmpty)
      .share();

    this.suggestions$ = input$
      .debounceTime(250)
      .switchMap((input: string) =>
        this.autocompleteService
          .getPlacePredictions({ input })
          .toArray()
          .catch(e => {
            if (e.type !== CallbackRequestError) {
              console.error(e);
            }
            return Observable.of<google.maps.places.AutocompletePrediction[]>([]);
          })
      )
      .share();

    this.result$ = input$
      .buffer(this.actionBuffer)
      .debounceTime(100)
      .switchMap(() => Observable.of<string>(this.autocompleteCtrl.value))
      .switchMap((address: string) =>
        this.geocoder
          .geocode({ address })
          .first()
          .catch(e => {
            if (e.type !== CallbackRequestError) {
              console.error(e);
            }
            return Observable.of<google.maps.GeocoderResult>(null);
          })
      )
      .map<google.maps.GeocoderResult, Address>(result =>
        this.addressService.addressFromGeocoderResult(result)
      )
      .share();

    this.result$.subscribe(address => {
      this.onTouched();
      this.onChange(address);
    });
  }

  onChange(val: any) {
    this.propagateChange(val);
  }

  onTouched() {
    this.propagateTouched();
  }

  writeValue(obj: any): void {
    this.autocompleteCtrl.setValue(this.addressService.getDisplayString(obj));
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.autocompleteCtrl.disable() : this.autocompleteCtrl.enable();
  }
}
