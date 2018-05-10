*** HTML ***
# Currency Mask

## Use

<p>The currency mask component is a wrapper around the Angular Material's [user input component](https://angular.io/guide/user-input). It allows for the consumer to restrict
numeric values and a single decimal, up to four decimal places, to the input field and transforms the value to the currency specified. </p>

## Sample
<mat-tab-group>
    <mat-tab label="Component Sample">
        <div class="tab-height">
         <ign-currency-mask [currencyCode]='USD'></ign-currency-mask>
        </div></mat-tab>
    <mat-tab label="HTML"><div class="tab-height">
        <table style="width:100%">
         &lt;ign-currency-mask [currencyCode]='USD'&gt;&lt;/ign-currency-mask&gt;
        </table>
    </div></mat-tab>
</mat-tab-group>

## Content

* Currency mask components can only contain numeric values with periods. All other characters will be removed.
* Currency mask components require a [currencyCode].
    * This specifies the currency code desired as per Angular Material's [currency pipe](https://angular.io/api/common/CurrencyPipe).

## Style

* The currency mask component follows the following design specifications:
    * Value is displayed up to four decimal places
    * User input will not be modified until on blur, and then replaced with the proper formatting.
    * No negative values are permitted.
* The currency mask requires the users place a 0 before decimal places.

*** TypeScript *** 

*** ExternalTypeScript ***

*** Imports ***