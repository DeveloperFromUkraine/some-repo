
## Use
  Card toolbars are containers used to house card titles, buttons, avatars, and other content at the top of
  the card itself. Card toolbar is to be used as a card header, which right now only includes a title (left) and buttons (right).

  ### Card Header Container 
    - Card toolbars should be placed within card header containers. 
    
  ### Alignment
    - Card title
      Card titles placed in the card toolbar are automatically aligned left
    - Other content
      All other content is aligned right

  ### Content
    - Toolbars should contain text and buttons that are used for main navigation and information. 

  ### Implementation
    - Declare an `ign-card-toolbar`. Put an `ign-card-title` inside. ign-card-title will be transcluded to the       left automatically. Now fill the `ign-card-toolbar` with everything you wish to float to the right (should    only be a primary button and a '...' icon right now)

  ### Accessibility
    - Accessibility should be handled by the inner components of the toolbar.


## API
  ### Selector
    * ign-card-toolbar
  
  ### Export As
    * CardToolbarComponent


## Implementation HTML
  <mat-card>
    <ign-card-main>
      <ign-card-section>
        <ign-card-toolbar>
          <ign-card-title></ign-card-title>
          <button mat-button> {{'COMMON.EDIT' | translate}} </button>
          <button
            mat-icon-button
          >
            <mat-icon
              class="mat-24"
            >
              more_vert
            </mat-icon>
          </button>
        </ign-card-toolbar>
      </ign-card-section>
    </ign-card-main>
  </mat-card>


## Implementation TS
  None

