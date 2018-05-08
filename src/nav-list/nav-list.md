*** HTML ***
# Navigation List

## Use
Utilize the mat-nav-list component for navigation lists, such as those with anchor tags. Nav-list components'
    anchor tags can be wrapped in a ign-list-item for multiple links within the list.

## Sample

<mat-tab-group>
    <mat-tab label="Component Sample">
        <div class="tab-height">
            <mat-nav-list>
                <a ign-list-item onClick=window.open() *ngFor="let folder of folders" target="\_blank" tabindex="0">
                    <mat-icon mat-list-icon>folder</mat-icon>
                    <h4>{{folder.name}}</h4>
                    <p> {{folder.updated | date}} </p>
                </a>
            </mat-nav-list>
        </div></mat-tab>
    <mat-tab label="HTML"><div class="tab-height">
        <table style="width:100%">
            <p> &lt;mat-nav-list&gt;</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&lt;a ign-list-item onClick&#61;window&#46;open&#40;&#41; &#42;ngFor&#61;"let folder of folders"</p>
            <p>     target="\_blank" tabindex="0"&gt;</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mat-icon mat-list-icon&gt;folder&lt;/mat-icon&gt;</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h4&gt;&#123;folder&#46;name&#125;&lt;/h4&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt; &#123;folder&#46;updated &#124; date&#125; &lt;/p&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/a&gt;</p>
            <p> &lt;/mat-nav-list&gt;</p>
        </table>
    </div></mat-tab>
    <mat-tab label="TS"><div class="tab-height">
        <table style="width:100%">
            <p>folders = [</p>
            <p>&nbsp;&nbsp;&#123;</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;name: 'Click the folders to open a blank page.',</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;updated: new Date('1/1/16'), </p>
            <p> &nbsp;&nbsp;&#125;,</p>
            <p> &nbsp;&nbsp;&#123;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;name: 'Your descriptor will go here.',</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;updated: new Date('1/17/16'),</p>
            <p> &nbsp;&nbsp;&#125;,</p>
            <p>&nbsp;&nbsp;&#123;</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;name: 'The dates are just for show.',</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;updated: new Date('1/28/16'),</p>
            <p>&nbsp;&nbsp;&#125;</p>
            <p>];</p>
        </table>
    </div></mat-tab>
</mat-tab-group>

## Content

* Mat nav list components differ from list components in that they are used to navigate to other links and pages.
* Mat nav lists should not be used simply declare content in a list form.
* Mat nav lists should contain icons and buttons, as well as descriptors.

## Style

* Mat nav lists should be displayed in vertical positioning.
* Mat nav lists should be spaced evenly apart, to ensure ease of navigation.

## Accessibility

* Add tabindex="0" within the a tag of the mat-nav-list in order to make each link accessible by tab
* Refer to Sample HTML for an example

*** TypeScript *** 
folders = [
        {
            name: 'Click the folders to open a blank page.',
            updated: new Date('1/1/16'),
        },
        {
            name: 'Your descriptor will go here.',
            updated: new Date('1/17/16'),
        },
        {
            name: 'The dates are just for show.',
            updated: new Date('1/28/16'),
        }
    ];

*** ExternalTypeScript ***

*** Imports ***