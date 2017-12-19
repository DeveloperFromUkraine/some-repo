import { Component, Input, ChangeDetectionStrategy, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDatepickerInput, MatDatepickerInputEvent } from '@angular/material';
import 'rxjs/util/pipe';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { of as observableOf } from 'rxjs/observable/of';
import { startWith, switchMap, pairwise, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'ign-date-range',
  templateUrl: './date-range.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateRangeComponent implements OnInit, OnDestroy {
  @Input()
  formGroup: FormGroup;
  @Input()
  startDateControlName = 'startDate';
  @Input()
  endDateControlName = 'endDate';

  @Input()
  startDateFilter: (date: Date) => boolean;
  @Input()
  endDateFilter: (date: Date) => boolean;

  @ViewChild('startPickerInput')
  startPickerInput: MatDatepickerInput<Date>;
  @ViewChild('endPickerInput')
  endPickerInput: MatDatepickerInput<Date>;

  private close$ = new Subject<void>();

  ngOnInit(): void {
    combineLatest<MatDatepickerInputEvent<Date>>(
      this.startPickerInput.dateChange.pipe(startWith(null)),
      this.endPickerInput.dateChange.pipe(startWith(null))
    )
    .pipe(
      takeUntil(this.close$),
      switchMap(() => observableOf([
        this.startPickerInput.value,
        this.endPickerInput.value,
      ])),
      pairwise()
    )
    .subscribe(([[prevStart, prevEnd], [currStart, currEnd]]) => {
      if (currStart && currEnd && (currEnd.getTime() < currStart.getTime())) {
        if (!prevEnd || (currEnd.getTime() !== prevEnd.getTime())) {
          this.formGroup.get(this.startDateControlName).setValue(currEnd);
        }
        this.formGroup.get(this.endDateControlName).reset();
      }
    });
  }

  ngOnDestroy(): void {
    this.close$.next();
    this.close$.complete();
  }
}
