*** HTML ***

# Switches

## Use
Switches (aka slide toggle toggle etc.) are selection controls that instantly take effect... mimicking a physical switches. They allow toggling between mutually exclusive options (e.g. on/off). Like a physical light switch. Use [checkboxes](/pages/createpage.action?spaceKey=IDS&title=Checkboxes+%28web%29+old&linkCreation=true&fromPageId=108273757) when the effect requires an additional step. see [Material design link](https://material.io/guidelines/components/selection-controls.html#selection-controls-switch) and [Angular Material Slide toggle.](https://material.angular.io/components/slide-toggle/overview) On/off switches toggle the state of a single settings option. The option that the switch controls as well as the state it’s in should be made clear from the corresponding inline label. Switches take on the same visual properties of the radio button.
In code Switches are out of the box Angular Material components. Within Sketch they are presented in horizontal and vertical layouts.
All Selection Controls use Accent color to indicate the selected state.

<table>
<tbody>
<tr>
<td>
<h4 id="do">Do</h4>

* Use for single settings 
* Use clear labels
* Use for actions that take immediate effect
    
</td>
<td>
<h4 id="dont">Don't</h4>

* Don't use for settings with multiple choices
    
</td>
</tr>
</tbody>
</table>

## Sample
<mat-tab-group>
    <mat-tab label="Component Sample">
        <mat-slide-toggle>
            Slide me!
        </mat-slide-toggle>
    </mat-tab>
    <mat-tab label="HTML">
        <p>&lt;mat-slide-toggle&gt;</p>
        <p>    Slide me! </p>
        <p>&lt;/mat-slide-toggle&gt;</p>
    </mat-tab>
</mat-tab-group>

## Content

* Switches are out of the box and do not require any additional content!

## Style

* Switch components are out of the box and do not require further styling. 

*** TypeScript *** 



*** ExternalTypeScript ***

*** Imports ***
import { MatSlideToggleModule } from '@angular/material/slide-toggle';