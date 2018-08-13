## Use
  An avatar displays an image, two letter initials (in the lack of an image), or the [person Material icon](https://material.io/icons/#ic_person) (in the lack of the previous two).

  ### Sizing
  -The avatar can be rendered in two sizes, small (40px in diameter) or large (70px in diameter).

  ### Tooltip
  -The avatar can be provided a tooltip to be displayed on mouse-over, as well a custom aria-label.


## API
  ### Selector
    * ign-avatar
  
  ### Export As
    * AvatarComponent

  ### Properties
    * @Input() image: string
      * The source url to get the image from. If the avatar represents an employee, it is highly recommended to use pipe EmployeePhoto. Otherwise, enter the full url of the proper ui-gateway url endpoint.

    * @Input() initials: string
      * Two letters to be displayed in the lack of an avatar image.
      
    * @Input() size: string
      * The size of the avatar. Value can be 'xs', 's', 'm', 'l', or 'xl'

    * @Input() tooltip: string
      * A tooltip to be displayed on mouse-over.
      * Providing tooltip sets the component's attribute aria-label to the tooltip value.
      * Providing tooltip sets the component's attribute tabindex to "0".

    * @Input() ariaLabel: string
      * A value for the component's attribure aria-label.
      * Providing ariaLabel sets the component's attribute tabindex to "0".


## Implementation HTML
    <ign-avatar 
        [image]="your_image_here"
        [initials]="'JB'"
        [size]="'large'"
    ></ign-avatar>
    <ign-avatar 
        [image]=""
        [initials]="'JB'"
        [size]="'s'"
    ></ign-avatar>
    <ign-avatar 
        [image]=""
        [initials]=""
        [size]="'l'"
    ></ign-avatar>
    <ign-avatar 
        [image]=""
        [initials]=""
        [size]="'l'"
        [tooltip]="'Tooltip'"
    ></ign-avatar>
    <ign-avatar 
        [image]=""
        [initials]=""
        [size]="'l'"
        [ariaLabel]="'Aria Label'"
    ></ign-avatar>


## Implementation TS 
  @Input() image: string;
  @Input() initials: string;
  @Input() size = 'l';
  @Input() tooltip: string;
  @Input() ariaLabel: string;