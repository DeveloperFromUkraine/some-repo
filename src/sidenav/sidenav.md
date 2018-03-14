*** HTML ***
# Sidenav

## Use

Sidenav components are utilized to act as site navigational windows without the need to open a different page
    or interrupt the user experience.

See [Material SideNav](https://material.angular.io/components/sidenav/overview) and 
    [Material Navigation Drawer Patterns](https://material.io/guidelines/patterns/navigation-drawer.html#).

## Sample
<mat-tab-group>
    <mat-tab label="Component Sample">
        <div class="tab-height">
            Click on the hamburger menu icon at the top left of this page to toggle the side nav component!
        </div></mat-tab>
    <mat-tab label="HTML"><div class="tab-height">
        <table style="width:100%">
            <p> &lt;mat-sidenav-container&gt;</p>
            <p>&nbsp;&lt;mat-sidenav #sidenav class="sidenav" mode="side" opened="false" [fixedInViewport]="true" [fixedTopGap]="headerHeight + 8"&gt;</p>
            <p>&nbsp;&nbsp;&lt;ul&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&lt;li *ngFor="let item of navItems"&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;a [routerLink]="[item.route]"&gt;	&#123; item.name &#125;&lt;/a&gt;</p>
            <p> &nbsp;&nbsp;&nbsp;&lt;/li&gt;</p>
            <p>&nbsp;&nbsp;&lt;/ul&gt;</p>
            <p> &nbsp;&lt;/mat-sidenav&gt;</p>
            <p>&nbsp;&lt;mat-sidenav-content&gt;</p>
            <p>&nbsp;&nbsp;&lt;mat-card&gt;</p>
            <p> &nbsp;&nbsp;&nbsp;&lt;header #header&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;mat-toolbar style="background-color: white; color: #424949" class="mat-elevation-z5"&gt;</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button mat-icon-button&gt; &lt;mat-icon style="color:lightgray"</p>
            <p>&#40;click&#41;="sidenav&#46;toggle&#40;&#41;" class="material-icons"&gt;menu&lt;/mat-icon&gt;&lt;/button&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button mat-button&gt;&lt;img class ="logo-small" src="/assets/logo-small.png"&gt;&lt;/button&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ignite Design System</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/mat-toolbar&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&lt;/header&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&lt;router-outlet&gt;&lt;/router-outlet&gt;</p>
            <p>&nbsp;&nbsp;&lt;/mat-card&gt;</p>
            <p>&nbsp;&lt;/mat-sidenav-content&gt;</p>
            <p>&lt;/mat-sidenav-container&gt;</p>
        </table>
    </div></mat-tab>
</mat-tab-group>

## Content

* API:
    * sidenav-header
    * sidenav-list
    * sidenav-list-item
* The sidenav component should contain references and links to other pages.
* The sidenav component should be used solely for navigational purposes.
* Single line items, two line items, and icons are supported menu items.
* List subheaders should be used to separate distinct groups of items.
* Two line items should consist of primary and secondary text and should not utilize icons.

## Style

* One sidenav component should be referenced throughout the entire user experience.
* Sidenav components should be allocated to the left hand side of the page and stretch to 100% vh.
* Sidenav components may have the ability to toggle at developers' preferences.

*** TypeScript *** 

*** ExternalTypeScript ***

*** Imports ***