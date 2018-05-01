*** HTML ***
# Expandable Search

## Use
A search component which displays a search icon, which, when clicked, expands to display an input field with a button to go back
    to exit search and a button within the input field to clear search text.

## Sample

<mat-tab-group>
    <mat-tab label="Component Sample"><div class="tab-height">
        <ign-expandable-search></ign-expandable-search>
    </div></mat-tab>
    <mat-tab label="HTML"><div class="tab-height">
        <table style="width:100%">
            <p>&lt;ign-data-table-container&gt;</p>
                <p>&lt;ign-expandable-search&gt;&lt;/ign-expandable-search&gt;</p>
                <p>&lt;mat-table</p>
                <p>aria-live="polite"</p>
                <p>aria-atomic="true"</p>
                <p>attr.aria-label="{{'{'}}{{'{'}} 'COMMON.SEARCH_HINTS' | translate {{'}'}}{{'}'}}"&gt;</p>
                <p>&lt;/mat-table&gt;</p>
            <p>&lt;/ign-data-table-container&gt;</p>
        </table></div>
    </mat-tab>
</mat-tab-group>

## Content
* `@Output() searchCriteria$: BehaviorSubject`
    * Outputs search values for consumers to subscribe to


## Style

* The expandable search component should be displayed at the top of the encapsulating container.

## Accessibility

* Add the following aria attributes to the `data-table` component that the search component corresponds to
(this will allow the screen reader to announce the updated search results as the user is typing):
    * `aria-live="polite"`
    * `aria-atomic="true"`
    * `attr.aria-label="{{'{'}}{{'{'}} 'COMMON.SEARCH_HINTS' | translate {{'}'}}{{'}'}}"`
* Refer to Sample HTML for an example on usage

*** TypeScript *** 

*** ExternalTypeScript ***

*** Imports ***