import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component, Injectable, NO_ERRORS_SCHEMA } from '@angular/core';

export class ComponentTest {

    static createTestBed(imports: NgModule[] = [], declarations: Component[] = [], providers: Injectable[] = []): void {
        TestBed.configureTestingModule({
            imports: [
                ...imports,
                NoopAnimationsModule
            ],
            declarations: [
                ...declarations
            ],
            providers: [{provide: APP_BASE_HREF, useValue: '/'}, ...providers],
            schemas: [NO_ERRORS_SCHEMA]
        })
        .compileComponents();
    }
}