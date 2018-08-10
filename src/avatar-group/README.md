## Use
  The avatar group component horizontally displays several avatars in two states (controlled by showContext below):
  1. In group / hub settings: with a count of avatars that is optionally displayed.
  2. In contextual managers settings: with a view all button and ellipsis overflow that is optionally displayed.

### Tooltip
  - Each avatar has a configurable tooltip that renders either a standardized full name (if a person is provided), or custom text (if a tooltip value is provided).

### Navigation
  - Each avatar, and the counter, can be configured to contain a url link to be navigated to on click.

## Settings
  - The maximum number of avatars displayed, and not displayed (the value seen in the counter), can be configured.
  - Type Person has been added to facilitate the casting of other types to meet interface Avatar's attribute person (see sample usage).


## API:
### Selector
  * ign-avatar-group

### Export As
  * AvatarGroupComponent
  
### Properties
  * @Input() avatars: Avatar[]
    * The avatars to be displayed, where:

        export interface Avatar {
        person?: Person;
        image?: string;
        // Use one string with a relative path. Do not use a route parameter array.
        link?: string;
        tooltip?: string;
        }

        export type Person = {
        firstName: string;
        lastName: string;
        preferredFirstName?: string;
        formerLastName?: string;
        }

  * @Input() cap: number
    * Optional input. By default, cap = 8.
    * The maximum number of avatars to be rendered, regardless of length of Avatar[].

  * @Input() showCounter: boolean
    * Optional input. Default value is true.
    * Whether to show the counter of the number of avatars not being rendered.
    * This will rendered as +X if showContext is true. Else it will be rendered as horizontal ellipsis (...).
    * The counter will only be displayed if the number of avatars is greater than the value of cap.

  * @Input() showContext: boolean
    * Optional input. Default value is false.
    * Whether to show the avatar group in context.
    * Causes the counter (if enabled) to render horizontal ellipsis (...).
    * Renders a view all button below the avatar group.

  * @Input() counterOffset: number
    * Optional input. Default value is 0.
    * The counter offset is a number added to the avatars's counter in order to modify its rendered value.
    * This also offsets the value displayed in the view all button to reflect all employees.
    * Example: Each avatar represents an employee and a company has 30 employees; however, you only have data to generate 10 avatars.
    * If a cap has not been specified, the avatar group component will generate 10 avatars, render 8, and display a counter with value 2. If you want this counter to represent the total amount of employees within the company, you could set counterOffset to equal totalNumberOfEmployees - avatars.length.

  * @Input() counterLink: string
    * Optional input.
    * When a user clicks on the counter, the router navigates to the specified URI.
    * Use one string with a relative path. Do not use a routes parameter array.

  * @Input() counterAriaLabel: string
    * Optional input.
    * The value to set the counter's attribute aria-label to.

  * @Input() viewAll: string
    * Optional input.
    * When a user clicks on the view all button, the router navigates to the specified URI.
    * Use one string with a relative path. Do not use a routes parameter array.

  * @Input() viewAllAriaLabel: string
    * Optional input.
    * The value to set the view all button's attribute aria-label to.

  * @Output() avatarClick: EventEmitter<Avatar>
    * Optional output.
    * Emits an event containing the Avatar model corresponding to the Avatar component that is clicked on.

  * @Output() counterClick: EventEmitter
    * Optional output.
    * Emits an empty event when the counter is clicked on.

  * @Output() viewAllClick: EventEmitter
    * Optional output.
    * Emits an empty event when the view all button is clicked on.


## Implementation HTML
  <ign-avatar-group
      [avatars]="avatars"
      [cap]="avatarsCap"
      [counterAriaLabel]="'2 more in the org chart.'"
      [counterOffset]="counterOffset"
      (avatarClick)="handleAvatarClicked($event)"
  ></ign-avatar-group>


## Implementation TS
  @Input() avatars: Avatar[] = [
    {
      person: {
        firstName: 'firstName1',
        preferredFirstName: 'preferredFirstName1',
        lastName: 'lastName1',
        formerLastName: 'formerLastName1',
      },
      tooltip: 'tooltip1',
    },
    {
      person: {
        firstName: 'firstName2',
        preferredFirstName: 'preferredFirstName2',
        lastName: 'lastName2',
        formerLastName: 'formerLastName2',
      },
      image: 'photoUploadId2',
      tooltip: 'tooltip2',
    },
    {
      person: {
        firstName: 'firstName3',
        preferredFirstName: 'preferredFirstName3',
        lastName: 'lastName3',
        formerLastName: 'formerLastName3',
      },
      image: 'photoUploadId3',
      tooltip: 'tooltip3',
    }
  ];

  avatarsCap = 3;
  counterOffset = 2;

  size = 'small';

  handleAvatarClicked(avatar: Avatar) {
    // insert hook action here, such as:
    // * pre-filtering a list using a service
    // * displaying a prompt concerning the avatar
    
    // console.log(`${avatar?.person?.firstName} ${avatar?.person?.lastName} - was clicked on`);
  }