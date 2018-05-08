import { Component, NgModule } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentTest } from '../../../test/test-bed/component';
import { By } from '@angular/platform-browser';
import { NestableFormDirective } from './index';
import { DebugElement } from '@angular/core';

@Component({
  template: `
        <form nuNestableForm="form"  [formGroup]="form">
            <input formControlName="name">
            <input formControlName="email">
        </form>
    `,
})
class DirectiveHostComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: [''],
    });
  }
}

describe('Nestable Form', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;
  let de: DebugElement;
  let directive: NestableFormDirective;
  let ne: HTMLElement;

  beforeEach(() => {
    ComponentTest.createTestBed(
      [ReactiveFormsModule] as NgModule[],
      [DirectiveHostComponent, NestableFormDirective] as Component[]
    );

    fixture = TestBed.createComponent(DirectiveHostComponent);
    de = fixture.debugElement.query(By.directive(NestableFormDirective));
    ne = de.nativeElement;
    directive = de.injector.get(NestableFormDirective);

    fixture.detectChanges();
  });

  it('should pass formGroup', () => {
    expect(directive.formGroup.contains('name')).toBeTruthy();
    expect(directive.formGroup.contains('email')).toBeTruthy();
  });

  it('should pass nuNestableForm', () => {
    expect(directive.nuNestableForm).toBe(ne.getAttribute('nuNestableForm'));
  });
});
