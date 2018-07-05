## Use
  * Empty state is used when a user encounter a resource page or a page of resources he/she has not yet created/encountered. 
  * Empty state is composed of multiple empty state styled specific components. 
  * It is up to the end user to assemble the empty state page how they see fit. 
  * Think of it as, we give you the specific lego pieces to use, and it's up to you to build your lego.

  ### Content
    -The empty state is used for pages and elements that do not exist. This includes:
      -Unfinished pages
      - Pages with empty groups or lists.
      - Cards with no content.
    - Empty states are the default view for the list-content pattern when there are no items set up, this mainly applies to company settings and other areas that are primarily lists.
    - The title and content are configurable and the content may include links (e.g., download a template)

  ### Action Items
    - There are also fixed actions available "Import" and "Add" which display as available, e.g, if import is not available for the area, only add will show.

## API
  ### Selector EmptyState 
    * ign-empty-state

  ### Selector EmptyStateTitle
    * ign-empty-state-title

  ### Selector EmptyStateDescription
    * ign-empty-state-description

  ### Selector EmptyStateImage
    * ign-empty-state-image 

  ### Export As EmptyState 
    * EmptyStateComponent

  ### Export As EmptyStateTitle
    * EmptyStateTitleComponent

  ### Export As EmptyStateDescription
    * EmptyStateDescriptionComponent

  ### Export As EmptyStateImage
    * EmptyStateImageDescription

## Implementation HTML

  ### Empty State Title
    <ign-empty-state-title></ign-empty-state-title>

  ### Empty State Description
    <ign-empty-state-description></ign-empty-state-description>

  ### Empty State Image
    <ign-empty-state-image></ign-empty-state-image>

  ### EmptyState:
   <ign-empty-state>
      <ign-empty-state-title>
          You've reached the example of an Empty State Page!</ign-empty-state-title>
      <ign-empty-state-description>
          <p>This page is in an empty state. You'll want to navigate out using the buttons in your implementation,
              but for now you'll have to settle with the side nav bar or the back button!</p>
      </ign-empty-state-description>
      <ign-button-group>
          <button mat-button color="accent" type="button">
              We're Buttons
          </button>
          <button mat-button color="accent" type="button">
              But We Don't Work
          </button>
      </ign-button-group>
  </ign-empty-state>

## Implementation TS
  None