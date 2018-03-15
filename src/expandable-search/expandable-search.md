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
            &lt;ign-expandable-search&gt;&lt;/ign-expandable-search&gt;
         </table></div>
    </mat-tab>
</mat-tab-group>

## Content
* `@Output() searchCriteria$: BehaviorSubject`
    * Outputs search values for consumers to subscribe to


## Style

* The expandable search component should be displayed at the top of the encapsulating container.

*** TypeScript *** 

*** ExternalTypeScript ***

*** Imports ***