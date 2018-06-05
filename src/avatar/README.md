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
      * The size of the avatar. Value can be 'small', or 'large'.

    * @Input() tooltip: string
      * A tooltip to be displayed on mouse-over.
      * Providing tooltip sets the component's attribute aria-label to the tooltip value.
      * Providing tooltip sets the component's attribute tabindex to "0".

    * @Input() ariaLabel: string
      * A value for the component's attribure aria-label.
      * Providing ariaLabel sets the component's attribute tabindex to "0".

## Implementation HTML
    <ign-avatar 
        [image]="cross_cutting_please_add_image_src_here_thanks!"
        [initials]="'JB'"
        [size]="'large'"
    ></ign-avatar>
    <ign-avatar 
        [image]=""
        [initials]="'JB'"
        [size]="'small'"
    ></ign-avatar>
    <ign-avatar 
        [image]=""
        [initials]=""
        [size]="'large'"
    ></ign-avatar>
    <ign-avatar 
        [image]=""
        [initials]=""
        [size]="'large'"
        [tooltip]="'Tooltip'"
    ></ign-avatar>
    <ign-avatar 
        [image]=""
        [initials]=""
        [size]="'large'"
        [ariaLabel]="'Aria Label'"
    ></ign-avatar>

## Implementation TS 
  @Input() image: string;
  @Input() initials: string;
  @Input() size = 'large';
  @Input() tooltip: string;
  @Input() ariaLabel: string;