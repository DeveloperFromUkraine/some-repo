*** HTML ***
# Icon

## Use
The icon component makes it easier to use vector-based icons. Material icons use geometric shapes to visually
    represent core ideas, capabilities, or topics. 
See [Material Design Style Icons](https://material.io/guidelines/style/icons.html) and [Angular Material Icon](https://material.angular.io/components/icon/overview).

## Sample
<mat-tab-group>
    <mat-tab label="Component Sample">
        <div class="tab-height">
            <mat-icon aria-label="home icon" aria-hidden="false" tabindex="0">home</mat-icon>
        </div>
    </mat-tab>
    <mat-tab label="HTML"><div class="tab-height">
        <table style="width:100%">
            &lt;mat-icon aria-label="Home Icon" aria-hidden="false"&gt;home&lt;/mat-icon&gt;
        </table>
    </div></mat-tab>
</mat-tab-group>

## Content

* Product icons are the visual expression of a brand’s products, services, and tools.
* System icons represent a command, file, device, directory, or common actions.
* The icon component does not support bitmap-based formats (png, jpg, etc.).

## Style

* Product icons are 48dp
* System icons are 24dp
* Stylistic specifications per mat-icon component can be found in the accordion below.

## Accessibility

* Include a descriptive aria-label for the icon as well as setting aria-hidden="false" within the mat-icon tag
* Add a tabindex="0" within the mat-icon tag so that it could be navigated to using tabs
* If the icon is used as a button with eventhandlers on click, include a role="button" within the mat-icon tag
* Refer to HTML in Sample section on usage
## Icon Components

<mat-accordion id = "accordion">
    <mat-expansion-panel>
        <mat-expansion-panel-header>
            <mat-panel-title><b>
                mat-icon matListIcon
            </b></mat-panel-title>
            <mat-panel-description><i>Creates icons to add to nav list items.</i></mat-panel-description>
        </mat-expansion-panel-header>
        <mat-tab-group>
            <mat-tab label="Component Styling"><div class="tab-height">
                <ul>
                    <li>The mat-icon matListIcon component should be used for list items.</li>
                    <li>This component should not be used for selection lists.</li>
                    <li>This component should be used for nav lists.</li>
                    <li>The component should have a descriptive aria-label for the list as well as aria-hidden="false"</li>
                    <li>The component should have a tabindex="0" to make it possible to navigate through tabs</li>
                    <li>If the icon is used as a button with eventhandlers on click, include a role="button" within the mat-icon tag</li>
                </ul>
            </div></mat-tab>
            <mat-tab label="HTML"><div class="tab-height">
                <p>&lt;mat-icon matListIcon aria-label="Icon List Title" aria-hidden="false" tabindex="0"&gt; &lt;/mat-icon matListIcon&gt;</p>
            </div></mat-tab>
        </mat-tab-group>
    </mat-expansion-panel>
</mat-accordion>

*** TypeScript *** 

*** ExternalTypeScript ***

*** Imports ***