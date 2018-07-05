## Use
    Forms are components used to house, select, and submit multiple sets of content within one sitting.

    ### Content
        - The form component generally consists of information that will be requested for processing, including employee number, name, birthday, and other identifying information.

    ### Implementation
        - Form components may also be utilized as a source of processing payments and requests.
        - The form component can be nested. This safely allows large model-driven forms to broken up into smaller pieces. The nested form can be used to build a tree of forms from small components.
        
    ### Accessibility
        -Relationship between controls in a form which are related should be programatically explicit
            - Use a descriptive aria-label and id for the heading of the form controls
            - Use aria-describedby label referencing the header's id on the div that encapsulates the group of related controls
            - Add a role="group" label within the div that ecapsulates the the group of related controls to show they are all related
        - If using a dropdown, add a descriptive aria-label for what the selectable components are for in the mat-select tag
        - Refer to the Sample HTML for an example

## API
    ### Selector FormGroup
        * ign-form-group

    ### Selector FormSizing
        * [ignSizeSmall], [nuSizeSmall]
        * [ignSizeMedium], [nuSizeMedium]
        * [ignSizeLarge], [nuSizeLarge]
        * [ignSizeFull], [nuSizeFull]

    ### Selector NestableForm
        * [nuNestableForm]
    
    ### Exported As FormGroup
        * FormGroupComponent
    
    ### Exported As FormSizing
        * SizingSmallDirective
        * SizingMediumDirective
        * SizingLargeDirective
        * SizingFullDirective

    ### Exported As NestableForm
        * NestableFormDirective
    
    ### Form Group Properties
        None 

    ### Form Sizing Properties
        * @Directive({ selector: '[ignSizeSmall], [nuSizeSmall]' })
            * None
        * @Directive({ selector: '[ignSizeMedium], [nuSizeMedium]' })
            * @Input() ignSizeMedium: boolean = null;
                * sets medium size ign
            * @Input() nuSizeMedium: boolean = null;
                * sets medium size nu
        * @Directive({ selector: '[ignSizeLarge], [nuSizeLarge]' })
            * @Input() nuSizeLarge: boolean = null;
                * sets large size ign
            * @Input() ignSizeLarge: boolean = null;
                * sets large size nu
        * @Directive({ selector: '[ignSizeFull], [nuSizeFull]' })
            * None
            
     ### Nestable Form Properties
        * @Directive({selector: '[nuNestableForm]'})
            * @Input() public formGroup: FormGroup;
                * Instantiates form group
            * @Input() public nuNestableForm: string;
                * Name of nestable form

## Implementation HTML
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

## Implementation TS
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