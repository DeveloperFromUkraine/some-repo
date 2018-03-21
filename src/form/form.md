*** HTML ***
# Form

## Use
Forms are components used to house, select, and submit multiple sets of content within one sitting.

## Sample

<mat-tab-group>
    <mat-tab label="Component Sample">
        <div class="tab-height">
            <form [formGroup]="form"> <ign-card-section> <div fxLayout="column">
                <mat-form-field ignSizeLarge>
                     <mat-select aria-label="Open example mat select"><mat-option da="jobSelect-empty" [value]="null">Pick me!</mat-option></mat-select>
                </mat-form-field></div></ign-card-section>
            </form>
            Click the form above!
        </div></mat-tab>
    <mat-tab label="HTML"><div class="tab-height">
        <table style="width:100%">
            <p>&lt;form [formGroup]="form"&gt; &lt;ign-card-section&gt; &lt;div fxLayout="column"&gt;</p>
            <p> &nbsp;&nbsp;&lt;mat-form-field ignSizeLarge&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;mat-select aria-label="open example mat select">&lt;mat-option da="jobSelect-empty" [value]="null">Pick me!&lt;/mat-option&gt;&lt;/mat-select&gt;</p>
            <p>&nbsp;&nbsp;&lt;/mat-form-field&gt;&lt;/div>&lt;/ign-card-section&gt;</p>
            <p> &lt;/form&gt;</p>
            <p> Click the form above!</p>
        </table></div>
    </mat-tab>
    <mat-tab label="TS"><div class="tab-height">
        <table style="width:100%">
            <p> public formBuilder: FormBuilder; </p>
            <p>private close$ = new Subject&lt;void&gt;(); </p>
            <p>form: FormGroup; </p>
            <p>constructor (formBuilder: FormBuilder) &#123; </p>
            <p>&nbsp;&nbsp;this.formBuilder = formBuilder; </p>
            <p>&#125; </p>
            <p> ngOnInit(): void &#123; </p>
            <p>&nbsp;&nbsp;this.form = this.formBuilder.group(&#123; </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;myDateRange: this.formBuilder.group(&#123; </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startDate: [new Date()], </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;endDate: [null] </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&#125;) </p>
            <p>&nbsp;&nbsp;&#125;) </p>
            <p>&#125; </p>
            <p>ngOnDestroy(): void &#123; </p>
            <p> &nbsp;&nbsp;this.close$.next(); </p>
            <p>&nbsp;&nbsp;this.close$.complete(); </p>
            <p>&#125;</p>
        </table></div>
    </mat-tab>
</mat-tab-group>

## Content
* The form component generally consists of information that will be requested for processing, including employee number,
name, birthday, and other identifying information.

* Form components may also be utilized as a source of processing payments and requests.

* The form component can be nested. This safely allows large model-driven forms to broken up into smaller pieces.
The nested form can be used to build a tree of forms from small components.

## Style

* No stylistic specifications. Forms are containers and are entirely customizable to fit the need of the
content.

## Accessibility

* If using a dropdown, add a descriptive aria-label for what the selectable components are for in the mat-select tag 
* Refer to the Sample HTML for an example

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
import { OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Subject } from 'rxjs/Subject';