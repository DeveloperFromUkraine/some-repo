## Use
    The currency mask component is a wrapper around the Angular Material's [user input component](https://angular.io/guide/user-input). It allows for the consumer to restrict
    numeric values and a single decimal, up to four decimal places, to the input field and transforms the value to the currency specified.

    ### Implementation
        - Currency masked should be placed inside of a form.

    ### Supported Inputs
        - Numbers and periods.
        - No commas, no currency.

    ### Style
        - The currency mask component follows the following design specifications:
        - Value is displayed up to four decimal places.
        - User input will not be modified until on blur, and then replaced with the proper formatting.
        - No negative values are permitted.
        - The currency mask requires the users place a 0 before decimal places.

    ### Accessibility
        - Accesibility is dependent on angular input accessibility.
        - The matInput directive works with native <input> to provide an accessible experience.
        - If the containing <mat-form-field> has a label it will automatically be used as the aria-label for the     <input>. However, if there's no label specified in the form field, aria-label, aria-labelledby or         <label for=...> should be added.
        - Any mat-error and mat-hint are automatically added to the input's aria-describedby list, and aria-invalid is automatically updated based on the input's validity state.


## API
    ### Selector
        * ign-currency-mask
    
    ### Export As
        * CurrencyMaskComponent
        
    ### Properties
        * `@Input currencyCode: string` 
            * specifies the currency code
        * `@Output() userValue = new EventEmitter<string>();`
            * Emits value to forms/user level subscriptions.
        * Currency mask components can only contain numeric values with periods. All other characters will      be removed.
        * Currency mask components require a [currencyCode].
            * This specifies the currency code desired as per Angular Material's [currency pipe](https://angular.io/api/common/CurrencyPipe).


## Implementation HTML
    <ign-currency-mask [currencyCode]='USD'></ign-currency-mask>


## Implementation TS
    None
