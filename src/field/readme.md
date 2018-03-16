# Field Component

This component displays a view field, consisting of a label and a value.

## Usage

A label must be provided. The contents of the tag will be displayed as the value. Example usage:

```html
<ign-field label="The Answer">42</ign-field>
```

# Inline Field Component

This component is similar to the field above but slightly different look and feel. Label will appear first followed by the text value on the same row.

## Usage

A label must be provided. The contents of the tag will be displayed as the value. Example usage:

```html
<ign-field-inline label="The Answer">42</ign-field-inline>
```
# Editable Field Component

his component is similar to the field component but also includes an edit button that emits an event that can be subscribed to.

## Usage

A label must be provided. The contents of the tag will be displayed as the value.
An editIcon can be optionaly provided, if none passed the button will display mat-icon mode_edit as default. Example usage:

```html
<ign-editable-field label="The Answer" (onIconClick)="myFn($event)">42</ign-field>
```

# Editable Inline Field Component

This component is similar to the editable field above but slightly different look and feel. Label will appear first followed by the text value followed by the edit button on the same row.

## Usage

A label must be provided. The contents of the tag will be displayed as the value. Example usage:

```html
<ign-editable-field-inline label="The Answer" editIcon="home" (onIconClick)="myFn($event)">42</ign-field-inline>
```
