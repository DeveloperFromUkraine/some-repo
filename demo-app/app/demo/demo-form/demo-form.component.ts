import {Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs/Subject';

const NOTES: string = require('raw-loader!./demo-form.md');

@Component({
    selector: 'demo-form',
    templateUrl: './demo-form.html',
    styleUrls: ['./demo-form.css'],
    encapsulation: ViewEncapsulation.None,
})
export class DemoFormComponent implements OnInit, OnDestroy{
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
