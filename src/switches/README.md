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
