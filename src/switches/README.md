## Use
    - Switches (aka slide toggle toggle etc.) are selection controls that instantly take effect... mimicking a      physical switches. 
    - They allow toggling between mutually exclusive options (e.g. on/off). Like a physical light switch. Use       [checkboxes](/pages/createpage.action?spaceKey=IDS&title=Checkboxes+%28web%29+old&linkCreation=true&          fromPageId=108273757) when the effect requires an additional step. see [Material design link]                 (https://material.io/guidelines/components/selection-controls.html#selection-controls-switch) and [Angular    Material Slide toggle.](https://material.angular.io/components/slide-toggle/overview) 
    
    ###  Slide-toggle label
        - The slide-toggle label is provided as the content to the <mat-slide-toggle> element.
        - If you don't want the label to appear next to the slide-toggle, you can use aria-label or aria-labelledby to specify an appropriate label.

    ### On/Off Switches
        - On/off switches toggle the state of a single settings option. The option that the switch controls as      well as the state it’s in should be made clear from the corresponding inline label. Switches take on      the same visual properties of the radio button.

    ### Implementation
        -In code Switches are out of the box Angular Material components. Within Sketch they are presented in       horizontal and vertical layouts.
        -Do's
            - Use for single settings
            - Use clear labels
            - Use for actions that take immediate effect
        -Don'ts
            - Don't use for settings with multiple choices

    ### Selection Controls
        -All Selection Controls use Accent color to indicate the selected state.

    ### Use with @angular/forms
        <mat-slide-toggle> is compatible with @angular/forms and supports both FormsModule and ReactiveFormsModule.

    ### Accessibility
        - The <mat-slide-toggle> uses an internal <input type="checkbox"> to provide an accessible experience.      This internal checkbox receives focus and is automatically labelled by the text content of the            <mat-slide-toggle> element.

        - Slide toggles without text or labels should be given a meaningful label via aria-label or                 aria-labelledby.
        

## API
    ### Selector 
        * mat-slide-toggle

    ### Export As
        * matSlideToggle

    ### Properties
        * @Input('aria-label') ariaLabel: string | null
            * Whether the slide-toggle element is checked or not Used to set the aria-label attribute on the underlying input element.

        * @Input('aria-labelledby') ariaLabelledby: string | null
            * Used to set the aria-labelledby attribute on the underlying input element.

        * @Input() checked: boolean
            * Whether the slide-toggle element is checked or not

        * @Input() color: ThemePalette
            * Theme color palette for the component.

        * @Input() disableRipple: boolean
            * Whether ripples are disabled.

        * @Input() disabled: boolean
            * Whether the component is disabled.

        * @Input() id: string
            * A unique id for the slide-toggle input. If none is supplied, it will be auto-generated.

        * @Input() labelPosition: 'before' | 'after'
            * Whether the label should appear after or before the slide-toggle. Defaults to 'after'

        * @Input() name: string | null
            * Name value will be applied to the input element if present

        * @Input() required: boolean
            * Whether the slide-toggle is required.

        * @Output() change: EventEmitter<MatSlideToggleChange>
            * An event will be dispatched each time the slide-toggle changes its value.

        * inputId: string
            Returns the unique id for the visual hidden input.

    ### Methods
        * focus()
        * toggle()

       
## Implementation HTML  
    <mat-card>
    <mat-card-content>
        <h2 class="example-h2">Slider configuration</h2>
        <section class="example-section">
        <label class="example-margin">Color:</label>
        <mat-radio-group [(ngModel)]="color">
            <mat-radio-button class="example-margin" value="primary">
            Primary
            </mat-radio-button>
            <mat-radio-button class="example-margin" value="accent">
            Accent
            </mat-radio-button>
            <mat-radio-button class="example-margin" value="warn">
            Warn
            </mat-radio-button>
        </mat-radio-group>
        </section>
        <section class="example-section">
        <mat-checkbox class="example-margin" [(ngModel)]="checked">Checked</mat-checkbox>
        </section>
        <section class="example-section">
        <mat-checkbox class="example-margin" [(ngModel)]="disabled">Disabled</mat-checkbox>
        </section>
    </mat-card-content>
    </mat-card>
    <mat-card class="result">
    <mat-card-content>
        <h2 class="example-h2">Result</h2>
        <section class="example-section">
        <mat-slide-toggle
            class="example-margin"
            [color]="color"
            [checked]="checked"
            [disabled]="disabled">
            Slide me!
        </mat-slide-toggle>
        </section>
    </mat-card-content>
    </mat-card>

## Implementation TS
    color = 'accent';
    checked = false;
    disabled = false;
