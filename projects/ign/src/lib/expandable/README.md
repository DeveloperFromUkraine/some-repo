## Usage

  Expandable Fab (floating action button) is composed of two parts:

  - ign-expanable-fab (the container)
  - ign-expanable-fab-item (items inside the expandable fab)

  The expandable fab handles state (open/close) implicitly so developers do not need to worry about that. The base open/close button are not configurable, and are considered system-wide configuration. To use, simply compose the items you wish to expand inside of the container.

  ### Icons
    - New icons can be added via the ign-expandable-fab-item tag. 
    - Icons should closely resemble the purpose of the icon and be approved by design. 
    - Expandable FAB uses mat icons. 

  ### Location
    - Expandable fab should be located in the bottom right or left hand corners of the parent containers. 

  ### Accessibility
    - Expandable fab has built in accessibility.
    - Add a descriptive ariaLabelOpen and ariaLabelClose within the ign-expandable-fab tag to describe the menu     being opened/closed
    - When using the expandable FAB button to change a route or href, use the provided inputs in the expandable     FAB tag (router/href) to prevent issues with tabbing through the control for accessibility
    - Refer to Sample HTML for usage

## API 
  ### Selector ign-expandable-fab
    * ign-expandable-fab
  
  ### Selector ign-expandable-fab-item 
    * ign-expandable-fab-item

  ### Export As ign-expandable-fab
    * ExpandableFabComponent
  
  ### Export As ign-expandable-fab-item 
    * ExpandableFabItemComponent

  ### ign-expandable-fab Properties
    * @ContentChildren(ExpandableFabItemComponent) btns: QueryList<ExpandableFabItemComponent>;
      * content child of expandable fab, includes all items listed within it
    * @Input() ariaLabelOpen = 'OPEN';
      * aria label for open state
    * @Input() ariaLabelClose = 'CLOSE';
      * aria label for closed state

  ### ign-expanadable-fab-item Properties
  * @Input() tooltipText: string;
    * string, tooltip text you wish to display, be sure to pass translated text
  * @Input() icon: string;
    * text, a material icon. You can find the list of supported icons here: https://material.io/icons/
  * @Input() href: string;
    * link to set up via expandable item
  * @Input() router: string;
    * route to set up via expandable item
  * @Output() clicked = new EventEmitter<any>();
    * event emitted after click

## Implementation HTML
  <ign-expandable-fab>
      <ign-expandable-fab-item (click)="clickHandlerA()" tooltipText="Tooltip A" icon="add">
      </ign-expandable-fab-item>
      <ign-expandable-fab-item (click)="clickHandlerB()" tooltipText="Tooltip B" icon="file_upload">
      </ign-expandable-fab-item>
      <ign-expandable-fab-item (click)="clickHandlerC()" tooltipText="Tooltip C" icon="lock_outline">
      </ign-expandable-fab-item>
  </ign-expandable-fab>

## Implementation TS
  None