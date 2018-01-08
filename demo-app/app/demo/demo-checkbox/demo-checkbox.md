# Checkboxes

Checkboxes are a type of selection control that allows selecting multiple options from a set. see [Material Design Selection controls](https://material.io/guidelines/components/selection-controls.html#selection-controls-checkbox) and [Angular Material Checkboxes](https://material.angular.io/components/checkbox/overview)

## Use
describe when and how to use, include implemented screen examples when possible along with do's and don't's

## Code

```
<section class="form-section">
  <h2 class="ign-title">Single</h2>
  <md-checkbox>Checkbox label</md-checkbox>
  <br />
  <br />
  <md-checkbox labelPosition="before">Checkbox label before</md-checkbox>
</section>
<h2 class="ign-title">Horizontal group</h2>
<section class="horizontalSelectionGroup">
  <md-checkbox>One</md-checkbox>
  <md-checkbox>Two</md-checkbox>
  <md-checkbox>Three</md-checkbox>
  <md-checkbox>Four</md-checkbox>
  <md-checkbox>five</md-checkbox>
</section>
<h2 class="ign-title">Vertical group</h2>
<section class="verticalSelectionGroup">
  <md-checkbox>One</md-checkbox>
  <md-checkbox>Two</md-checkbox>
  <md-checkbox>Three</md-checkbox>
  <md-checkbox>Four</md-checkbox>
  <md-checkbox>five</md-checkbox>
</section>
```

## Style

* Horizontal group: options should be separated by 16px of space on the right
* Vertical group: options should be separated by 16px of space below

## Content
* Use short, succinct labels for options; groups can be preceded by a heading and/or informational text. Progressively disclose longer descriptions when possible.
