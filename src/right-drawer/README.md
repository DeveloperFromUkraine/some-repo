`ign-right-drawer`

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