import { Component } from '@angular/core';

import { FormBuilder, FormGroup} from '@angular/forms';
import { OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Component({
    selector: 'demo-date-range',
    templateUrl: './demo-date-range.html',
})

export class DemoDateRangeComponent {
     
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


