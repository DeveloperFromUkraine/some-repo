*** HTML ***
# List Search

## Use
A search component which displays a search icon and an input field to be used with lists.

## Sample

<mat-tab-group>
    <mat-tab label="Component Sample"><div class="tab-height">
        <ign-list-search ariaLabel="Search employees"></ign-list-search>
    </div></mat-tab>
    <mat-tab label="HTML"><div class="tab-height">
        <table style="width:100%">
            &lt;ign-list-search ariaLabel="Search employees"&gt;&lt;/ign-list-search&gt;
         </table></div>
    </mat-tab>
</mat-tab-group>

## Content
* `@Input() ariaLabel: string`
    * Takes in descriptive label to set aria-label to
* `@Output() searchCriteria$: BehaviorSubject`
    * Outputs search values for consumers to subscribe to


## Style

* The list search component can be used at the top of a list by itself or accompanied by other options in the row, such as a filter button.

## Accessibility

* Add a descriptive ariaLabel attribute that describes what is being searched (for example: "Search Employees")
* Refer to Sample HTML for an example on usage

*** TypeScript *** 

*** ExternalTypeScript ***

*** Imports ***
