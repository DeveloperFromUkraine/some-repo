*** HTML ***
# Floating Action Buttons

## Use
Expandable Fab (floating action button) is composed of two parts:
* ign-expanable-fab (the container)
* ign-expanable-fab-item (items inside the expandable fab)

The expandable fab handles state (open/close) implicitly so developers do not need to worry about that.
    The base open/close button are not configurable, and are considered system-wide configuration. To use,
    simply compose the items you wish to expand inside of the container.

## Sample
<mat-tab-group>
    <mat-tab label="Component Sample"><div class="tab-height">
        <div id ="element" ><ign-expandable-fab ariaLabelOpen="open example menu" ariaLabelClose="close example menu" style="position:relative; right: unset !important; bottom: unset !important;">
            <ign-expandable-fab-item icon="add">
            </ign-expandable-fab-item >
            <ign-expandable-fab-item icon="file\_upload">
            </ign-expandable-fab-item >
            <ign-expandable-fab-item icon="lock\_outline">
            </ign-expandable-fab-item >
        </ign-expandable-fab></div>
    </div></mat-tab>
    <mat-tab label="HTML"><div class="tab-height">
        <table style="width:100%">
            <p>&lt;ign-expandable-fab ariaLabelOpen="open example menu" ariaLabelClose="close example menu"&gt;</p>
            <p>   &nbsp;&nbsp;&lt;ign-expandable-fab-item icon="add" router="['./add']"&gt;</p>
            <p>   &nbsp;&nbsp;&lt;/ign-expandable-fab-item&gt;</p>
            <p>   &nbsp;&nbsp;&lt;ign-expandable-fab-item icon="file\_upload" href="#"&gt;</p>
            <p>   &nbsp;&nbsp;&lt;/ign-expandable-fab-item&gt;</p>
            <p>   &nbsp;&nbsp;&lt;ign-expandable-fab-item icon="lock\_outline"&gt;</p>
            <p>   &nbsp;&nbsp;&lt;/ign-expandable-fab-item&gt;</p>
            <p>   &lt;/ign-expandable-fab&gt;</p>
        </table></div>
    </mat-tab>
</mat-tab-group>

## Content

* Buttons within the FAB should only include those relevant to the current page and its navigation.
* Three or four buttons maximum should be located within the FAB to avoid unfriendly user experience.


## Style

ign-expandable-fab

* By default, the fab is allocated to the lower right hand corner, but may be allocated to any corner on the page.

ign-expanadable-fab-item

* (click) - click handler
* [tooltipText] - string, tooltip text you wish to display, be sure to pass translated text
* [icon] - text, a material icon. You can find the list of supported icons [here](https://material.io/icons/).
* router - route, router change done on click
* href - link, link to be directed to on click

## Accessibility

* Add a descriptive ariaLabelOpen and ariaLabelClose within the ign-expandable-fab tag to describe the menu being opened/closed
* When using the fab button to change a route or href, use the provided inputs in the fab tag (router/href) to prevent issues with tabbing through the control for accessibility
* Refer to Sample HTML for usage

*** TypeScript *** 

*** ExternalTypeScript ***

*** Imports ***