# List Item Components

## List Item Content

`List item content` may hold multiple occurrences of text or anything else desired for the list item's content

## List Item

`List item` may hold `list item content`, along with a menu if desired, ensuring that the two appear stylistically correct

## List Item Container

`List item container` will usually serve as a container for multiple occurrences of `list item` components.

## Usage

## API
  ### Selector ListItem
    * ign-list-item

  ### Selector ListItemContent
    * ign-list-item-content

  ### Selector ListContainer
    * ign-list-container

  ### Exported As ListItem
    * ListItemComponent

  ### Exported As ListItemContent
    * ListItemContentComponent

  ### Exported As ListContainer
    * ListContainerComponent

## Implementation HTML
  <ign-list-container>
    <ign-list-item>
      <ign-list-item-content>
      </ign-list-item-content>
    </ign-list-item>
  </ign-list-container>

## Implementation TS
  None