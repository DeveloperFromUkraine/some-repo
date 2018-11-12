## Use
    Right drawer components are used to display summarized information and navigational linkage to other pages
    and components when a selected item is clicked on. 

  ### Styling
    * Right drawer components should always be located to the right.
    * Right drawer components should be able to be closed.


## API 
  ### Selector
    * ign-right-drawer

  ### Export As
    * RightDrawerComponent

  ### Attributes
    * `@Input()startOpen: boolean`
      * checks if drawer is open

    * `@Input() open: boolean (implicit state, but exposed if needed)`
      * placeholder for open drawer status

    * `@Input() title: string`
      * title for right drawer component

    * `@Input() openChange(boolean)`
      * emitter for open status

  ### Methods
    * toggleDrawer(boolean)
    * closeDrawer()
    * openDrawer()


### Implementation HTML
  <ign-right-drawer
          title="I am a title."
          [startOpen]="true">
      <ign-list-selection-item
              key="1234"
              title="I am a right drawer."
              subtitle="I am a right drawer subtitle."
      >
      </ign-list-selection-item>
  </ign-right-drawer>


### Implementation TS
  None