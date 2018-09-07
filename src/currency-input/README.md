## Use
    The currencyMask Directive is an attribute that can be put on a text input, and formats the input value to show the user a properly formatted currency, it also sets the precision of the input

    ### Implementation
        - Currency masked should be placed on an input as an attribute.

    ### Supported Inputs
        - Numbers, -, +.
        - No commas, no currency, no decimals.

    ### Style
        - The currency mask component follows the following design specifications:
        - Value is displayed up to two decimal places.
        - User input will be formatted on edit
        - Entering a number will push into the input from the right side of where the cursor is
        - Deleting/Backspacing values will shift everything that is right of the value deleted to the left

    ### Accessibility
        - Accesibility is dependent on angular input accessibility.
        - The matInput directive works with native <input> to provide an accessible experience.
        - If the containing <mat-form-field> has a label it will automatically be used as the aria-label for the     <input>.
        - Any mat-error and mat-hint are automatically added to the input's aria-describedby list, and aria-invalid is automatically updated based on the input's validity state.


## API
    ### Selector
        * [currencyMask]

    ### Export As
        * None

    ### Properties
        * `@Input options: CurrencyMaskConfig`
            * specifies the format of the mask


## Implementation HTML
    <input currencyMask [options]="options"></input>


## Implementation TS
    None
