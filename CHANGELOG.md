### vNEXT

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
