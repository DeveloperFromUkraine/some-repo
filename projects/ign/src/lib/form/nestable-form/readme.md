# Nestable Form Directive

This safely allows large model-driven forms to broken up into smaller pieces.

## Usage

## API

  ### Selector
        * [nuNestableForm]

  ### Exported As
        * NestableFormDirective

  ###  Properties
        * @Directive({selector: '[nuNestableForm]'})
            * @Input() public formGroup: FormGroup;
                * Instantiates form group
            * @Input() public nuNestableForm: string;
                * Name of nestable form

## Implementation HTML
    <form [formGroup]="form">
      <formGroup [formGroup]="groupA">
        <input [formControlName]="controlA1"/>
        <input [formControlName]="controlA2"/>
      </formGroup>
      <formGroup [formGroup]="groupB">
        <input [formControlName]="controlB1"/>
        <formGroup [formGroup]="groupC">
          <input [formControlName]="controlC1"/>
        </formGroup>
      </formGroup>
    </form>

## Implementation TS
  ### NonCommon Groups
    export class MyComponent {
      form: FormGroup

      constructor(...) {
        this.form = fb.group({
          groupA: fb.group({
            controlA1: ['', Validators.required],
            controlA2: ['', Validators.required],
          }),
          groupB: fb.group({
            controlB1: ['', Validators.required],
            groupC: fb.group({
              controlC1: ['', Validators.required],
            })
          })
        });
      }
    }
  ### Common Groups
  If `groupA` or `groupB` is a common group in the application, then it may be helpful to move it into its own reusable component. With nested forms, you can build the above form as follows: 

  @Component({
    selector: 'myComponent'
    template: `
      <form
        [formGroup]="form"
        [nuNestableForm]
      >
        <nestedFormA></nestedFormA>
        <nestedFormB></nestedFormB>
      </form>
    `
  })
  export class MyComponent {
    form: FormGroup

    constructor(...) {
      this.form = fb.group({});
    }
  }

  @Component({
    selector: 'nestedFormA'
    template: `
      <formGroup
        [nuNestableForm]="groupA"
        [formGroup]="form"
      >
        <input [formControlName]="controlA1"/>
        <input [formControlName]="controlA2"/>
      </formGroup>
    `
  })
  export class FormA {
    form: FormGroup

    constructor(...) {
      this.form = fb.group({
        controlA1: ['', Validators.required],
        controlA2: ['', Validators.required],
      });
    }
  }

  @Component({
    selector: 'nestedFormB'
    template: `
      <formGroup
        [nuNestableForm]="groupB"
        [formGroup]="form"
      >
        <input [formControlName]="controlB1"/>
        <nestedFormC></nestedFormC>
      </formGroup>
    `
  })
  export class FormB {
    form: FormGroup

    constructor(...) {
      this.form = fb.group({
        controlB1: ['', Validators.required],
      });
    }
  }

  @Component({
    selector: 'nestedFormC'
    template: `
      <formGroup
        [nuNestableForm]="groupC"
        [formGroup]="form"
      >
        <input [formControlName]="controlC1"/>
      </formGroup>
    `
  })
  export class FormC {
    form: FormGroup

    constructor(...) {
      this.form = fb.group({
        controlC1: ['', Validators.required],
      });
    }
  }
