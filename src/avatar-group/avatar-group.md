*** HTML ***

# Avatar Group

## Use

The avatar group component horizontally displays several avatars and, optionally, a count of avatars not displayed.

Each avatar has a configurable tooltip that renders either a standardized full name (if a person is provided), or custom text (if a tooltip value is provided).

Each avatar, and the counter, can be configured to contain a url link to be navigated to on click.

The maximum number of avatars displayed, and not displayed (the value seen in the counter), can be configured.

Type `Person` has been added to facilitate the casting of other types to meet interface Avatar's attribute `person` (see sample usage).
## Sample

<mat-tab-group>
    <mat-tab label="Component Sample">
        <div class="tab-height">
          <ign-avatar-group
            [avatars]="avatars"
            [cap]="avatarsCap"
            [counterAriaLabel]="avatars.length - cap + counterOffset + ' more employees available in the Org Chart'"
            [counterOffset]="counterOffset"
          ></ign-avatar-group>
        </div></mat-tab>
    <mat-tab label="HTML"><div class="tab-height">
        <table style="width:100%">
            <p>&lt;ign-avatar-group&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[avatars]="avatars"</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[cap]="avatarsCap"</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[counterAriaLabel]="avatars.length - cap + counterOffset + ' more employees available in the Org Chart'"</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[counterOffset]="counterOffset"</p>
            <p>&lt;/ign-avatar-group&gt;</p>
        </table>
    </div></mat-tab>
    <mat-tab label="TS"><div class="tab-height">
        <table style="width:100%">
            <p>// This is just an example avatar group data source.</p>
            <br>
            <p>// Visualize this as a type that contains attribute employeeInfo, a fictitious superset of type Person.</p>
            <p>@Input data: EmployeeData[];</p>
            <br>
            <p>avatars: Avatar[];</p>
            <p>avatarsCap = 3;</p>
            <br>
            <p>ngOnChanges(changes: SimpleChanges) &#123;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;const dataChanges = changes['data'];</p>
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;if (dataChanges && data.length) &#123;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.avatars = this.generateAvatars(this.data);</p>
            <p>&nbsp;&nbsp;&#125;</p>
            <p>&#125;</p>
            <br>
            <p>generateAvatars(data: EmployeeData[]): Avatar[] &#123;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;let avatars: Avatar[] = [];</p>
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;for (const dataItem of employeeData) &#123;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const avatar: Avatar = &#123;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;person: <Person>dataItem.employeeInfo,</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;link: dataItem.employeeInfo</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;? `/employees/$&#123;data.dataItem.employmentId&#125;/employment`</p>      
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: `/activations/position-hub/positions/$&#123;dataItem.position.positionId&#125;`,</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;</p>
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;avatars = [...avatars, avatar];</p>
            <p>&nbsp;&nbsp;&#125;</p>
            <p>&#125;</p>
        </table>
    </div></mat-tab>
</mat-tab-group>

## Content

* `@Input() avatars: Avatar[]`
  * The avatars to be displayed, where:
  ```
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
  ```

* `@Input() cap: number`
  * Optional input. By default, cap = 8.
  * The maximum number of avatars to be rendered, regardless of length of Avatar[].
  
* `@Input() size: string`
  * The size of the avatar. Value can be 'small', or 'large'.

* `@Input() showCounter: boolean`
  * Optional input. Default value is true.
  * Whether to show the counter of the number of avatars not being rendered.
  * The counter will only be displayed if the number of avatars is greater than the value of cap.

* `@Input() counterOffset: number`
  * Optional input. Default value is 0.
  * The counter offset is a number added to the avatars's counter in order to modify its rendered value 
  * Example: Each avatar represents an employee and a company has 30 employees; however, you only have data to generate 10 avatars. 
  * If a cap has not been specified, the avatar group component will generate 10 avatars, render 8, and display a counter with value 2. If you want this counter to represent the total amount of employees within the company, you could set counterOffset to equal `totalNumberOfEmployees - avatars.length`.

* `@Input() counterLink: string`
  * Optional input.
  * When a user clicks on the counter, the router navigates to the specified URI.
  * Use one string with a relative path. Do not use a routes parameter array.

* `@Input() counterAriaLabel: string`
  * Optional input.
  * The value to set the counter's attribute `aria-label` to.

## Accessibility

* The counter, by default, has attribute `tabindex` set to `"-1"`.
  * Providing a value for `counterLink` changes the counter's attrinute `tabindex` to `"0"`.
  * Providing a value for `counterAriaLabel` changes the counter's attrinute `tabindex` to `"0"`.
* Each avatar's attribute `aria-label` is set to the value of its tooltip.

## Style

* The avatar group is already pre-styled.

*** TypeScript ***

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

*** ExternalTypeScript ***

*** Imports ***

import { Component, Input } from '@angular/core';
