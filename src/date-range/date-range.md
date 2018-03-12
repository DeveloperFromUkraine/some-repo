*** HTML ***
# Date-Range

## Use
The date range component is used to create a pair of date pickers corresponding to the start and end dates of a range.

## Sample

<mat-tab-group>
    <mat-tab label="Component Sample"><div class="tab-height">
        <form [formGroup]="form">
            <ign-date-range [formGroup]="form.controls.myDateRange"></ign-date-range>
        </form>
    </div></mat-tab>
    <mat-tab label="HTML"><div class="tab-height">
        <table style="width:100%">
            &lt;ign-date-range [formGroup]="form.controls.myDateRange"&gt;&lt;/ign-date-range&gt;
        </table></div>
    </mat-tab>
    <mat-tab label="TS"><div class="tab-height">
        <table style="width:100%">
            <p>public formBuilder: FormBuilder; </p>
            <p>private close$ = new Subject&lt;void&gt;(); </p>
            <p>form: FormGroup; </p>
            <p>constructor (formBuilder: FormBuilder) &#123; </p>
            <p>&nbsp;&nbsp;this.formBuilder = formBuilder; </p>
            <p> &#125; </p>
            <p>ngOnInit(): void &#123; </p>
            <p>&nbsp;&nbsp;this.form = this.formBuilder.group(&#123; </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;myDateRange: this.formBuilder.group(&#123; </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startDate: [new Date()], </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;endDate: [null] </p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&#125;) </p>
            <p> &nbsp;&nbsp;&#125;) </p>
            <p> &#125; </p>
            <p> ngOnDestroy(): void &#123; </p>
            <p> &nbsp;&nbsp;this.close$.next(); </p>
            <p> &nbsp;&nbsp;this.close$.complete(); </p>
            <p> &#125;
        </table></div>
    </mat-tab>
</mat-tab-group>

## Content

* `@Input() formGroup: FormGroup`
    * The form group for date values
* `@Input() startDateControlName = 'startDate'`
    * The name of the start picker control in `formGroup`
* `@Input() endDateControlName = 'endDate'`
    * The name of the end picker control in `formGroup`
* `@Input() startDateFilter: (Date) => boolean`
    * An optional filter function to disable specific dates in the start picker
* `@Input() endDateFilter: (Date) => boolean`
    * An optional filter function to disable specific dates in the end picker


## Style

* The date range component should be placed in the upper left or right hand corners of a card or page.

*** TypeScript *** 
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

*** ExternalTypeScript ***

*** Imports ***
import { FormBuilder, FormGroup} from '@angular/forms';
import { OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';