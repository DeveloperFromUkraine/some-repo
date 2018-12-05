import { DateRangeComponent } from './date-range.component';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';

describe('Date Range', () => {
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

  describe('when an end date is chosen that is before the start date', () => {
    it('should replace the start date with the end date and clear the end date with no previous dates chosen', () => {
      const startDate = new Date(2000, 5, 2);
      const endDate = new Date(2000, 5, 1);
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

    it('should replace the start date with the end date and clear the end date with a previous end date chosen', () => {
      const startDate = new Date(2000, 5, 2);
      const endDate = new Date(2000, 5, 3);
      const endDateNew = new Date(2000, 5, 1);
      formGroup.patchValue({
        startDate,
        endDate,
      });
      startPickerInput.value = startDate;
      endPickerInput.value = endDate;

      endPickerInput.dateChange.next();
      endPickerInput.value = endDateNew;
      endPickerInput.dateChange.next();

      expect(formGroup.controls.startDate.value).toEqual(endDateNew);
      expect(formGroup.controls.endDate.value).toBeNull();
    });

    it('should not replace the start date with the end date when the prev and current end dates match', () => {
      const startDate = new Date(2000, 5, 2);
      const endDate = new Date(2000, 5, 3);
      const startDateNew = new Date(2000, 5, 4);
      const endDateNew = new Date(2000, 5, 3);
      formGroup.patchValue({
        startDate,
        endDate,
      });
      startPickerInput.value = startDate;
      endPickerInput.value = endDate;

      endPickerInput.dateChange.next();
      startPickerInput.value = startDateNew;
      endPickerInput.value = endDateNew;
      endPickerInput.dateChange.next();

      expect(formGroup.controls.startDate.value).toEqual(startDate);
      expect(formGroup.controls.endDate.value).toBeNull();
    });
  });

  it('should not change either date when an end date after the start date is chosen', () => {
    const startDate = new Date(2000, 1, 1);
    const endDate = new Date(2000, 1, 2);
    formGroup.patchValue({
      startDate,
      endDate,
    });
    startPickerInput.value = startDate;
    endPickerInput.value = endDate;

    endPickerInput.dateChange.next();

    expect(formGroup.controls.startDate.value).toEqual(startDate);
    expect(formGroup.controls.endDate.value).toEqual(endDate);
  });
});
