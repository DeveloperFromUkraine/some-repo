### vNEXT

- Removed date range component

### v2.0.7

- Converted repository from being a web application to a library
- Applied best practices to accessibility directives; avatar, avatar group, and button group components
- Deprecated center, input mask, and currency mask


### v2.0.6

- Added type button to the submit buttons in persistent-search and expandable-search
- Added sandboxes for avatar and avatar-group
- Added global style.scss for sandboxes to use

### v2.0.5

 - Temporarily removed the ngx-currency integration until it is updated

### v2.0.4

  - Update `ign-sidenav-list-item` to use darker shades of grey due to color palette update

### v2.0.3

- Updated all direct palette selections
- Update verison of ignite-common to v0.14.1
- Updated `ign-expandable-search` to allow focus on search expand (default true)
- Added currencyMask from ngx-currency
- Updated `angular-playground` to latest version
- Addded stylelint

### v2.0.2

- Bugfix for Angular Material: deprecated attributes for input and form fields

### v2.0.1

- Bugfix for persistent search da attribute

### v2.0.0

- Upgraded component library to Angular/RxJS 6

### v1.0.11

- Fixed bug which caused scroll-bar to blink at side of `loading-container`
- Added `svgIcon` input to `ign--sidenav-list-item`, which allows for non-material icons to be used in the left-hand nav.

### v1.0.10

- Added da attribute to `ign-persistent-search` input

### v1.0.9

- Added new context support for avatar groups
  - Using `showContext` will:
     - Enable the view all button below the group if `viewAllLink` is provided
     - Change the counter avatar from +X to (...)
  - Using `showTooltips` will toggle displaying tooltips across all avatars. Support for showing tooltips will be dropped in a future release.
- Exposed event emitters on avatar groups for custom hooks

### v1.0.8

- Hotfix dealing with avatar component alignment issues and theme color changes.
- The following components needed to use the `secondary` theme instead of `accent`:
  - src/card/card-toolbar/card-toolbar.scss
  - src/data-table-container/data-table-container.scss
  - src/info-banner/info-banner.scss

### v1.0.7

- Added support to medium size for avatar component

### v1.0.6

- Modified ign-loading-container so that its contents are hidden instead of ngIfed to prevent issues arising from creating and destroying the components inside

### v1.0.5

- Added new avatar sizes "s" and "l". Support for the corresponding keywords "snall" and "large" respectively will be dropped
  in a future release.
- Added support for AngularPlayground (http://www.angularplayground.it/)
- Added .nvmrc file to project
- Added a new input to `ign-selection-item` for the statusText and updated styles to use _typography.
- Updated ignite-common version.
- Upgraded `ignite-common` version. Updated to `"@types/node": "^6.0.114"`

### v1.0.4

- Renamed `ign-list-search` to `ign-persistent-search`, added `placeholder` input, and updated spacing between search icon and input

### v1.0.3

- Pulled in logger service and removed ignite-design-services as a dependency

### v1.0.2

- Version bump to fix k8 pipeline

### v1.0.1

- Fixed bug in components setting role attribute in inner div instead of HostBinding

### v1.0.0

- Updated documentation (Readme) for IDS
- Migrated ign-messages component from ultipro-web
- Updated test coverage for all components
- Updated accessibility for all components
- Added list of contributors
- Added Readme files, API's and samples for all remaining components and sub-components

### v0.7.2

- Fixed bug in currency component
- Fixed angular linting issues with components

### v0.7.1

- Modified `ign-right-drawer` to use `mat-drawer`, to unfocus/darken background content, to close on backdrop click and escape key press, and to make content scrollable
- Added `@Input` ariaBtnLabel, with default value, to `ign-editable-field` component and `ign-editable-field-inline` component
- Added an aria-describedby to `ign-editable-field` component and `ign-editable-field-inline` component
- New [currency input mask component](./src/currency-input-mask/currency-input-mask.md) `ign-currency-mask`

### v0.7.0

- Deprecated ign-nav-list, it is recommended to use mat-nav-list instead
- Deprecated ign-divider, it is recommended to use mat-divider instead
- Deprecated ign-card-container, it is recommended to use mat-card instead
- Migrated ign-hub-card over to ultipro-web
- New `ign-list-search` component
- Added localization to IDS components

### v0.6.0

- Updated colors with tokens from Ignite-Common

### v0.5.0

- Added example and demo for max height in dialog
- New [editable field component](./src/field/README.md#editable-field-component) `ign-editable-field`
- New [editable inline field component](./src/field/README.md#editable-inline-field-component) `ign-editable-field-inline`
- Added expandable search component and options container

### v0.4.0

- Introducing first pass of text-list-item component
- Extracting text-list-item and nav-list into modules
- Adding manifests and modifying ci:package script in order to deploy doc site
- New [inline field component](./src/field/README.md#inline-field-component) `ign-field-inline`
- Adding data table container with paginator
- Added enhanced dialog examples and demo
- Adding data table container with paginator

### v0.3.1

- Updated the expandable-fab component so that when one of its children buttons are clicked, it collapses automatically.

### v0.3.0

- Empty state buttons will now center and style correctly when using either ign-button-group or mat-card-actions
- Remove version number from root `package.json`, as the library is published using `src/package.json`
- Add CONTRIBUTING.md file to make contribution process a little more clear
- New [loading container component](./src/loading-container/README.md) `ign-loading-container`
- New [date range picker component](./src/date-range/README.md) `ign-date-range`
- Empty state image will now scale to fit the page

### v0.2.0

- Revert to deploying from `dist/` now that pipeline support exists (thanks Baker!)

### v0.1.6

- Bring extracted components to parity with the state the embedded components were in prior to the migration ([PR #4](http://devgit:7990/projects/NUI/repos/ignite-design-system/pull-requests/4/overview))

### v0.1.5

- Make expandable FAB items inaccessible when the add button is collapsed ([PR #3](http://devgit:7990/projects/NUI/repos/ignite-design-system/pull-requests/3/overview))

### v0.1.4

- Migrate `CardSectionSubTitleComponent` from webapp

### v0.1.3

- Upgrade to Angular 5.x
- Remove `autocomplete-places` again pending ng5 upgrade

### v0.1.2

- Configure package.json to allow deployment from root

### v0.1.1

- Add changelog
- Migrate `autocomplete-places` from webapp ([PR #1](http://devgit.dev.us.corp:7990/projects/NUI/repos/ignite-design-system/pull-requests/1/overview))
- Initial migration of ign components from yamazaki webapp to standalone module
