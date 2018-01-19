import {Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs/Subject';

const NOTES: string = require('raw-loader!./demo-date-range.md');

@Component({
    selector: 'demo-date-range',
    templateUrl: './demo-date-range.html',
    styleUrls: ['./demo-date-range.css'],
    encapsulation: ViewEncapsulation.None,
})
export class DemoDateRangeComponent implements OnInit, OnDestroy{
    notes = NOTES;
    public formBuilder: FormBuilder;
    private close$ = new Subject<void>();
    form: FormGroup;
    constructor (formBuilder: FormBuilder) {
        this.formBuilder = formBuilder;
    }


    ngOnInit(): void {
        this.form = this.formBuilder.group({
            myDateRange: this.formBuilder.group({
                startDate: [null],
                endDate: [null]
            })
        })
    }

    ngOnDestroy(): void {
        this.close$.next();
        this.close$.complete();
    }
}
