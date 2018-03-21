
## Content

* API:
    * sidenav-header
    * sidenav-list
    * sidenav-list-item
* The sidenav component should contain references and links to other pages.
* The sidenav component should be used solely for navigational purposes.
* Single line items, two line items, and icons are supported menu items.
* List subheaders should be used to separate distinct groups of items.
* Two line items should consist of primary and secondary text and should not utilize icons.

## Style

* One sidenav component should be referenced throughout the entire user experience.
* Sidenav components should be allocated to the left hand side of the page and stretch to 100% vh.
* Sidenav components may have the ability to toggle at developers' preferences.

## Accessibility

* Include aria-haspopup="true" aria-hidden="false" within the tag of the component that you are using toggle the visibility of the sidenav
* Set a descriptive aria-label for what the component that toggles the sidenav opens. Update the aria-label depending on the sidenavs visibility
* Set an aria-expanded tag on the for the component that toggles the sidenav and change it depending on if the sidenav is opened/closed
* Set an aria-expanded tag for the actual sidenav component and toggle that depending on if it is opened/closed
* Refer to Sample HTML and TS for example