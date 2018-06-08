## Use
  Loading container is a wrapper (higher level) component around your content. It will show a spinner after a period (right now 400ms) until the consumer declares the content loaded. Most developers needing to consume the loading container will simply wrap their existing on content in an `ign-loading-container` and let the loading container know when the content is loaded. See [Angular Material Loading Container](https://material.angular.io/components/progress-spinner/overview).

  ### Implementation
    - The loading-container component is a wrapper. It contains whichever component is inside.
    - The loading-container component should be utilized when cards, tables, and pages are loading to display to the front end.
    - The component must utilized in a way that an action will turn off the loading state by the developer consuming the component.

  ### Accessibility
    - Add a descriptive ariaLabel attribute that describes what is being loaded
    - Refer to Sample HTML for an example on usage

## API
  ### Selector
    * ign-loading-container

  ### Exported As
    * LoadingContainerComponent
    
  ### Properties
    * '@Input' loading (input): boolean
      *  Loading status, defaults to true.

## Implementation HTML
  <ign-loading-container [loading]="BOOLEAN">
  </ign-loading-container>

## Implementation TS
  None
  