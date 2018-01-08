# Radio Buttons

"Radio buttons allow the user to select one option from a set. Use radio buttons for exclusive selection if you think that the user needs to see all available options side-by-side. Otherwise, consider a dropdown, which uses less space than displaying all options." - MD see  [Material Design Radio button](https://material.io/guidelines/components/selection-controls.html#selection-controls-radio-button) and [Angular Material Radio button](https://material.angular.io/components/radio/overview)

## Use

**Do**

* Use radio buttons when scanning options is helpful, helps clarify what's being asked and there is enough space

**Don't**

* Don't include more than 5-7 options, depending on label length use a select menu instead
* Don't use long labels, consider a heading with an info dialog (for concepts that require additional instruction)

## Code

```
<h2 class="ign-title">Horizontal group</h2>
<section class="horizontalSelectionGroup">
  <md-radio-group>
      <md-radio-button value="1">Option 1</md-radio-button>
      <md-radio-button value="2">Option 2</md-radio-button>
      <md-radio-button value="3">Option 3</md-radio-button>
      <md-radio-button value="4">Option 4</md-radio-button>
      <md-radio-button value="5">Option 5</md-radio-button>
  </md-radio-group>
</section>
<h2 class="ign-title">Vertical group</h2>
<section class="verticalSelectionGroup">
  <md-radio-group class="verticalSelectionGroup">
      <md-radio-button value="1">Option 1</md-radio-button>
      <md-radio-button value="2">Option 2</md-radio-button>
      <md-radio-button value="3">Option 3</md-radio-button>
      <md-radio-button value="4">Option 4</md-radio-button>
      <md-radio-button value="5">Option 5</md-radio-button>
  </md-radio-group>
</section>
```

## Style

* Options should have 16px spacing vertically and horizontally between items

## Content
* Use succinct labels for options rather than sentences
