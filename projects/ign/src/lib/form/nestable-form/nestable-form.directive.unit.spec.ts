import { NestableFormDirective } from './nestable-form.directive';
import { FormBuilder, Validators } from '@angular/forms';

describe('Nestable Form', () => {
  let directive: NestableFormDirective;
  let parentDirective: NestableFormDirective;

  describe('when a parent nestable form exists', () => {
    beforeEach((done) => {
      const fb = new FormBuilder();

      parentDirective = new NestableFormDirective(null);
      parentDirective.formGroup = fb.group({});
      directive = new NestableFormDirective(parentDirective);
      directive.formGroup = fb.group({
        control1: ['1', Validators.required],
        control2: ['2'],
      });
      directive.nuNestableForm = 'nestedForm';
      directive.ngOnInit();

      // setup is being deferred, so allow internal promises to resolve
      setTimeout(() => {
        done()
      }, 0);
    });

    it('should register to the parent', () => {
      expect(parentDirective.formGroup.get('nestedForm')).not.toBeNull();
    });

    describe('when the child has errors', () => {
      it('should make the parent form invalid', () => {
        directive.formGroup.controls.control1.setValue('');
        expect(parentDirective.formGroup.invalid).toBeTruthy();
      });
    });

    describe('when the child form is destroyed', () => {
      it('should unregiser from the parent', () => {
        directive.ngOnDestroy();
        expect(parentDirective.formGroup.get('nestedForm')).toBeNull();
      });
    });

    it('should not register itself as a parent', () => {
      expect(() =>
        parentDirective.registerNestedForm('myself', parentDirective.formGroup)
      ).toThrowError(
        'Trying to add itself! Nestable form can be added only on parent "FormGroup".'
      );
    });
  });
});
