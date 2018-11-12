*** HTML ***
# Form

## Use
Forms are components used to house, select, and submit multiple sets of content within one sitting.

## Sample

<mat-tab-group>
    <mat-tab label="Component Sample">
        <div class="tab-height">
            <form [formGroup]="form">
                 <h1 id="editProfileHeader" aria-label="Edit Profile Section">Edit Profile</h1>
                <div aria-describedby="editProfileHeader" role="group" >
                    <div id="personalInfo" role="heading" aria-level="2">Personal Information
                        <div>
                            <mat-form-field>
                            <input matInput formControlName="name" placeholder="Name \*" type="text"
                                aria-labelledby="Name \*" aria-required="true" aria-describedby="personalInfo"/>
                            </mat-form-field>
                        </div>
                        <div>
                            <mat-checkbox formControlName="age" [(ngModel)]="checked" [attr.aria-checked]="checked" 
                                        aria-labelledby="I am over 18 years old" aria-describedby="personalInfo">
                                I am over 18 years old.
                            </mat-checkbox>
                        </div>
                    </div>
                    <br><br>
                    <div id="addressInfo" role="heading" aria-level="2">Address<br>
                        <mat-form-field>
                            <input matInput formControlName="address" placeholder="Adress \*" type="text"
                                aria-labelledby="Address \*" aria-required="true" aria-describedby="addressInfo"/>
                        </mat-form-field>
                        <mat-form-field>
                            <input matInput formControlName="city" placeholder="City \*" type="text"
                                aria-labelledby="City \*" aria-required="true" aria-describedby="addressInfo"/>
                        </mat-form-field>
                        <mat-form-field>
                            <mat-select formControlName="state" placeholder="State \*"
                                        aria-labelledby="State \*" aria-describedby="addressInfo" aria-required="true">
                                <mat-option \*ngFor="let state of states" [value]="state.abbreviation">
                                    {{ state.abbreviation }}
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                        <mat-form-field>
                            <input matInput formControlName="zip" placeholder="ZIP Code *" type="text"
                                aria-labelledby="ZIP Code \*" aria-required="true" aria-describedby="addressInfo"
                                aria-live="polite"/>
                            <mat-hint align="end">
                                {{form.get('zip').value?.length || 0}}/5
                            </mat-hint>
                        </mat-form-field>
                    </div>
                    <div>
                        <button mat-button aria-labelledby="Submit" 
                                [disabled]="!form.valid" [attr.aria-disabled]="!form.valid">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            Click the form above!
        </div></mat-tab>
    <mat-tab label="HTML"><div class="tab-height">
            <p>&lt;div class="tab-height"&gt;</p>
            <p> &nbsp;&nbsp;   &lt;form &#91;formGroup&#93;="form"&gt; </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;        &lt;h1 id="editProfileHeader" aria-label="Edit Profile Section"&gt;Edit Profile&lt;/h1&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;        &lt;div aria-describedby="editProfileHeader" role="group"&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            &lt;div id="personalInfo" role="heading" aria-level="2"&gt;Personal Information</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                &lt;div&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                    &lt;mat-form-field&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                    &lt;input matInput formControlName="name" placeholder="Name &#42;" type="text"</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                            aria-labelledby="Name &#42;" aria-required="true" aria-describedby="personalInfo"/&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                    &lt;/mat-form-field&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                &lt;/div&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                &lt;div&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                    &lt;mat-checkbox formControlName="age" &#91;&#40;ngModel&#41;&#93;="checked" &#91;attr&#46;aria-checked&#93;="checked"</p> 
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                    aria-labelledby="I am over 18 years old" aria-describedby="personalInfo"&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                        I am over 18 years old&#46;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                    &lt;/mat-checkbox&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                &lt;/div&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            &lt;/div&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            &lt;div id="addressInfo" role="heading" aria-level="2"&gt;Address&lt;br&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                &lt;mat-form-field&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                    &lt;input matInput formControlName="address" placeholder="Adress &#42;" type="text"</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                            aria-labelledby="Address &#42;" aria-required="true" aria-describedby="addressInfo"/&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;              &lt;/mat-form-field&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;               &lt;mat-form-field&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                   &lt;input matInput formControlName="city" placeholder="City &#42;" type="text"</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                           aria-labelledby="City &#42;" aria-required="true" aria-describedby="addressInfo"/&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;               &lt;/mat-form-field&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;              &lt;mat-form-field&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                   &lt;mat-select formControlName="state" placeholder="State &#42;"</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                aria-labelledby="State &#42;" aria-describedby="addressInfo" aria-required="true"&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                      &lt;mat-option &#42;ngFor="let state of states" &#91;value&#93;="state&#46;abbreviation"&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                           &#123; &#123; state&#46;abbreviation &#125; &#125;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                      &lt;/mat-option&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                   &lt;/mat-select&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;               &lt;/mat-form-field&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;               &lt;mat-form-field&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                   &lt;input matInput formControlName="zip" placeholder="ZIP Code &#42;" type="text"</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                         aria-labelledby="ZIP Code &#42;" aria-required="true" aria-describedby="addressInfo"</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                         aria-live="polite"/&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                    &lt;mat-hint align="end"&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                        &#123;&#123;form&#46;get&#40;'zip'&#41;&#46;value&#63;&#46;length &#124;&#124; 0&#125;&#125;/5</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                    &lt;/mat-hint&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                &lt;/mat-form-field&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;            &lt;/div&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;           &lt;div&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                &lt;button mat-button aria-labelledby="Submit" </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                        &#91;disabled&#93;="&#33;form&#46;valid" &#91;attr&#46;aria-disabled&#93;="&#33;form&#46;valid"&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                    Submit</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                &lt;/button&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;            &lt;/div&gt;</p>
            <p>&nbsp;&nbsp;       &lt;/div&gt;    </p>
            <p>    &lt;/form&gt;</p>
            <p>/div&gt;</p>
        </div>
    </mat-tab>
    <mat-tab label="TS"><div class="tab-height">
            <p>    public formBuilder: FormBuilder;</p>
            <p>    private close$ = new Subject&#60;void&#62;();</p>
            <p>    form: FormGroup;</p>
            <p>    checked: boolean = false;</p>
            <p>    states: any;</p>
            <p>    constructor (formBuilder: FormBuilder) &#123;</p>
            <p>&nbsp;&nbsp;        this.formBuilder = formBuilder;</p>
            <p>&nbsp;&nbsp;        let data = new Data();</p>
            <p>&nbsp;&nbsp;        this.states = data.states;</p>
            <p>    &#125;</p>
            <p>    ngOnInit(): void &#123;</p>
            <p>&nbsp;&nbsp;        this.form = this.formBuilder.group( &#123;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;            name : ["", Validators.required],</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;            age: ["", null],</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;            address: ["", Validators.required],</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;            city: ["", Validators.required],</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;            state: ["", Validators.required],</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;            zip: ["", [Validators.required, Validators.maxLength(5)]]</p>
            <p>&nbsp;&nbsp;        &#125; );</p>
            <p>    &#125;</p>
        </div>
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

* Relationship between controls in a form which are related should be programatically explicit
    * Use a descriptive aria-label and id for the heading of the form controls
    * Use aria-describedby label referencing the header's id on the div that encapsulates the group of related controls
    * Add a role="group" label within the div that ecapsulates the the group of related controls to show they are all related
* If using a dropdown, add a descriptive aria-label for what the selectable components are for in the mat-select tag 
* Refer to the Sample HTML for an example

*** TypeScript *** 
    public formBuilder: FormBuilder;
    private close$ = new Subject<void>();
    form: FormGroup;
    checked: boolean = false;
    states: any;

    constructor (formBuilder: FormBuilder) {
        this.formBuilder = formBuilder;
        let data = new Data();
        this.states = data.states;
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group( {
            name : ["", Validators.required],
            age: ["", null],
            address: ["", Validators.required],
            city: ["", Validators.required],
            state: ["", Validators.required],
            zip: ["", [Validators.required, Validators.maxLength(5)]]
        } );
    }

    ngOnDestroy(): void {
        this.close$.next();
        this.close$.complete();
    }

*** ExternalTypeScript ***

*** Imports ***
import { OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Data } from './data';