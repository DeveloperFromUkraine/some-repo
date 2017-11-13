# Expandable Fab

## Usage

Expandable Fab (floating action button) is composed of two parts:

- ign-expanable-fab (the container)
- ign-expanable-fab-item (items inside the expandable fab)

The expandable fab handles state (open/close) implicitly so developers do not need to worry about that. The base open/close button are not configurable, and are considered system-wide configuration. To use, simply compose the items you wish to expand inside of the container.

## API 

ign-expandable-fab

- None, just a container

ign-expanadable-fab-item

 - (click) - click handler
 - [tooltipText] - string, tooltip text you wish to display, be sure to pass translated text
 - [icon] - text, a material icon. You can find the list of supported icons here: https://material.io/icons/

## Example Usage
```
  <ign-expandable-fab>
    <ign-expandable-fab-item (click)="clickHandlerA()" tooltipText="Tooltip A" icon="add">
    </ign-expandable-fab-item >
    <ign-expandable-fab-item (click)="clickHandlerB()" tooltipText="Tooltip B" icon="file_upload">
    </ign-expandable-fab-item >
    <ign-expandable-fab-item (click)="clickHandlerC()" tooltipText="Tooltip C" icon="lock_outline">
    </ign-expandable-fab-item >
  </ign-expandable-fab>
```