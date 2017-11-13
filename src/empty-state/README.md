# Menu Component

Empty state is used when a user encounter a resource page or a page of resources he/she has not yet created/encountered. Empty state is composed of multiple empty state styled specific components. It is up to the end user to assemble the empty state page how they see fit. (Think of it as, we give you the specific lego pieces to use, and it's up to you to build your lego)

## Usage

The following is a usage example demonstrating the above description:

```
<!--State for no items created yet  -->
<ign-empty-state>
  <ign-empty-state-title>
    No [object name] yet</ign-empty-state-title>
  <ign-empty-state-description>
    My object's description
  </ign-empty-state-description>
  <ign-button-group>
    <button mat-button color="accent" type="button">
      Add
    </button>
    <button mat-button color="accent" type="button">
      Import
    </button>
  </ign-button-group>
</ign-empty-state>
```
