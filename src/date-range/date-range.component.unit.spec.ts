import { DateRangeComponent } from './date-range.component';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormBuilder } from '@angular/forms';

describe('ign-date-range', () => {
  let dateRange: DateRangeComponent;
  let startPickerInput;
  let endPickerInput;
  let formGroup: FormGroup;

  beforeEach(() => {
    startPickerInput = {
      dateChange: new Subject<void>(),
      value: undefined,
    };
    endPickerInput = {
      dateChange: new Subject<void>(),
      value: undefined,
    };
    formGroup = new FormBuilder().group({
      startDate: [null],
      endDate: [null],
    });

    dateRange = new DateRangeComponent();
    dateRange.formGroup = formGroup;
    dateRange.startPickerInput = startPickerInput;
    dateRange.endPickerInput = endPickerInput;

    dateRange.ngOnInit();
  });

  afterEach(() => {
    dateRange.ngOnDestroy();
  });

  it('should clear end date when start date after end date is selected', () => {
    formGroup.controls.endDate.setValue(new Date(2000, 0, 1));
    startPickerInput.value = new Date(2000, 5, 15);
    endPickerInput.value = new Date(2000, 0, 1);

    startPickerInput.dateChange.next();

    expect(formGroup.controls.endDate.value).toBeNull();
  });

  it('should replace the start date with the end date and clear the end date when an end date before the start date is chosen', () => {
    const startDate = new Date(2000, 5, 1);
    const endDate = new Date(2000, 0, 1);

    formGroup.patchValue({
      startDate,
      endDate,
    });
    startPickerInput.value = startDate;
    endPickerInput.value = endDate;

    endPickerInput.dateChange.next();

    expect(formGroup.controls.startDate.value).toEqual(endDate);
    expect(formGroup.controls.endDate.value).toBeNull();
  });
});
