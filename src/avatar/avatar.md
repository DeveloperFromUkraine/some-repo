*** HTML ***

# Avatar

## Use

An avatar displays an image, two letter initials (in the lack of an image), or the [person Material icon](https://material.io/icons/#ic_person) (in the lack of the previous two).

The avatar can be rendered in two sizes, small (40px in diameter) or large (70px in diameter).

The avatar can be provided a tooltip to be displayed on mouse-over, as well a custom aria-label.

## Sample
<mat-tab-group>
    <mat-tab label="Component Sample">
        <div class="tab-height">
            <!-- This will display an image. -->
            <ign-avatar 
                [image]="cross_cutting_please_add_image_src_here_thanks!"
                [initials]="'JB'"
                [size]="'large'"
            ></ign-avatar>
            <!-- This will display two letters. -->
            <ign-avatar 
                [image]=""
                [initials]="'JB'"
                [size]="'small'"
            ></ign-avatar>
            <!-- This will display a person icon. -->
            <ign-avatar 
                [image]=""
                [initials]=""
                [size]="'large'"
            ></ign-avatar>
            <!-- This will display a tooltip on mouse-over. The avatar will have tabindex set to 0 and
            aria-label set to the tooltip value. -->
            <ign-avatar 
                [image]=""
                [initials]=""
                [size]="'large'"
                [tooltip]="'Tooltip'"
            ></ign-avatar>
            <!-- This will display an avatar with tabindex set to 0 and aria-label set to 'Aria Label' -->
            <ign-avatar 
                [image]=""
                [initials]=""
                [size]="'large'"
                [ariaLabel]="'Aria Label'"
            ></ign-avatar>
        </div></mat-tab>
    <mat-tab label="HTML"><div class="tab-height">
        <table style="width:100%">
            <p><!-- This will display an image. --></p>
            <p>&lt;ign-avatar&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[image]="employee | employeePhoto: 'large'"</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[initials]="employee | employeeInitials"</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[size]='large'"</p>
            <p>&lt;/ign-avatar&gt;</p>
            <br>
            <p><!-- This will display two letters. --></p>
            <p>&lt;ign-avatar&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[image]=""</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[initials]="employee | employeeInitials"</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[size]="'small'"</p>
            <p>&lt;/ign-avatar&gt;</p>
            <br>
            <p><!-- This will display a person icon. --></p>
            <p>&lt;ign-avatar&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[image]=""</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[initials]=""</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[size]="'large'"</p>
            <p>&lt;/ign-avatar&gt;</p>
            <br>
            <p><!-- This will display a tooltip on mouse-over. The avatar will have tabindex set to 0 and aria-label set to the tooltip value. --></p>
            <p>&lt;ign-avatar&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[image]=""</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[initials]=""</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[size]="'large'"</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[tooltip]="'Tooltip'"</p>
            <p>&lt;/ign-avatar&gt;</p>
            <br>
            <p><!-- This will display an avatar with tabindex set to 0 and aria-label set to 'Aria Label' --></p>
            <p>&lt;ign-avatar&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[image]=""</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[initials]=""</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[size]="'large'"</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[ariaLabel]="'Aria Label'"</p>
            <p>&lt;/ign-avatar&gt;</p>
        </table>
    </div></mat-tab>
</mat-tab-group>

## Content

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

## Accessibility

* When adding a routerLink to the avatar component, always add attribute role="link".
* The component has tabindex set to "-1" by default, unless provided @Input tooltip or ariaLabel, which sets it to "0".

## Style

* The avatar is already pre-styled.

*** TypeScript *** 

  @Input() image: string;
  @Input() initials: string;
  @Input() size = 'large';
  @Input() tooltip: string;
  @Input() ariaLabel: string;

*** ExternalTypeScript ***

*** Imports ***

import { Component, Input } from '@angular/core';