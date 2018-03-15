
## Content
* Radio button components should use succinct labels for options rather than sentences.


## Style

* Options should have 16px spacing vertically and horizontally between items.

* Do
    * Use radio buttons when scanning options is helpful, helps clarify what's being asked and there is enough space.
    * User radio buttons when several options are available but only one is requested.

* Don't
    * Don't include more than 5-7 options, depending on label length use a select menu instead.
    * Don't use long labels, consider a heading with an info dialog (for concepts that require additional instruction).

## Accessibility

* Relationships between radio buttons and their group heading should be programatically explicit
    * Assign a unique ID and a descriptive aria-label within the mat-radio-group tag
    * Reference the unique ID in each child radio button using the <b>aria-describedby</b> property.

* Refer to HTML in Sample section for example