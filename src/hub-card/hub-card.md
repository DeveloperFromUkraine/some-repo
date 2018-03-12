*** HTML ***

# Hub Card

## Use
Hub Card components are used as navigational, aesthetically pleasing cards that house the hyperlinks to other
    pages within the same user's experience. 

## Sample
<mat-tab-group>
    <mat-tab label="Component Sample">
        <div class="tab-height">
            <ign-hub-card
                    [attr.da]="'I am an attribute'"
                    [title]="'I am a title'"
                    [subtitle]="'I am a subtitle'"
                    [primaryActionText]="'I am primary action text'"
            >
            </ign-hub-card>
        </div></mat-tab>
    <mat-tab label="HTML"><div class="tab-height">
        <table style="width:100%">
            <p> &lt;ign-hub-card</p>
            <p>&nbsp;&nbsp;        [title]="'I am a title'"</p>
            <p>&nbsp;&nbsp;        [subtitle]="'I am a subtitle'"</p>
            <p>&nbsp;&nbsp;        [primaryActionText]="'I am primary action text'"</p>
            <p>&gt;</p>
            <p>&lt;/ign-hub-card&gt;</p>
        </table>
    </div></mat-tab>
</mat-tab-group>

## Content

* Hub cards consist of an icon and a title.
* Hub cards optionally can include subtitles, action text.
* Hub cards should act as hyperlinks to other pages within the same user's Ulti-Pro.
* Titles and images should be relative and concise.

## Style

* Hub card components should be evenly spaced and aligned across the page.
* Hub card components have an 8px margin.
* Hub cards are customizable, but should remain relevant to the redirected content.

*** TypeScript *** 

*** ExternalTypeScript ***

*** Imports ***