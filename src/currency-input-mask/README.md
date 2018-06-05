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
