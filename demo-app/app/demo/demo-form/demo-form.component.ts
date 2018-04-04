import { Component } from '@angular/core';

import { OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Data } from './data';
@Component({
    selector: 'demo-form',
    templateUrl: './demo-form.html',
})

export class DemoFormComponent {
     
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


}


