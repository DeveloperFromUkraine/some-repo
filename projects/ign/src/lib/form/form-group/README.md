## API
    ### Selector 
        * ign-form-group
    
    ### Exported As FormGroup
        * FormGroupComponent

## Implmentation HTML
    <div class="example-container">
        <form class="example-container" [formGroup]="options">
        </form>
    </div>

## Implementation TS
    options: FormGroup;
    constructor(fb: FormBuilder) {
        this.options = fb.group({
        hideRequired: false,
        floatLabel: 'auto',
        });
    }