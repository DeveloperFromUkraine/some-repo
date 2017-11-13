import {
  OnInit,
  OnDestroy,
  Directive,
  SkipSelf,
  Optional,
  Attribute,
  Injector,
  Input,
} from '@angular/core';
import { NgForm, FormArray, FormGroup, AbstractControl } from '@angular/forms';

const resolvedPromise = Promise.resolve(null);

@Directive({
  selector: '[nuNestableForm]',
})
export class NestableFormDirective implements OnInit, OnDestroy {
  @Input() public formGroup: FormGroup;

  @Input() public nuNestableForm: string;

  constructor(
    @SkipSelf()
    @Optional()
    private parentForm: NestableFormDirective,
    private injector: Injector
  ) {}

  ngOnInit() {
    this.executePostponed(() => this.resolveAndRegister(this.nuNestableForm));
  }

  ngOnDestroy() {
    if (this.parentForm) {
      this.parentForm.removeControl(this.nuNestableForm);
    }
  }

  public registerNestedForm(formGroupName: string, control: AbstractControl): void {
    // NOTE: prevent circular reference (adding to itself)
    if (control === this.formGroup) {
      throw new Error(
        'Trying to add itself! Nestable form can be added only on parent "FormGroup".'
      );
    }
    this.formGroup.addControl(formGroupName, control);
  }

  public removeControl(control: string): void {
    this.formGroup.removeControl(control);
  }

  private resolveAndRegister(formGroupName: string): void {
    if (this.parentForm != null) {
      this.parentForm.registerNestedForm(formGroupName, this.formGroup);
    }
  }

  // NOTE: this method prevents modifications to the form during ngDoCheck
  private executePostponed(callback: () => any): void {
    resolvedPromise.then(callback);
  }
}
