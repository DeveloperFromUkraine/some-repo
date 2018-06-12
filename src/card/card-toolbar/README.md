# Card Toolbar

Card toolbar is to be used as a card header, which right now only includes a title (left) and buttons (right)

## Usage
Declare an `ign-card-toolbar`. Put an `ign-card-title` inside. ign-card-title will be transcluded to the left automatically. Now fill the `ign-card-toolbar` with everything you wish to float to the right (should only be a primary button and a '...' icon right now)

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

