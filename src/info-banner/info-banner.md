*** HTML ***
# Info Banner

## Use

The info banner component is used to display messages on the front end to users, notifying the user when a
    request was completed or submitted without error.

## Sample

<mat-tab-group>
    <mat-tab label="Component Sample">
        <div class="tab-height">
            <ign-info-banner> <button class="dismiss-button" type="button" mat-icon-button>&times;</button>
                <ul class="message-list">
                    <li>This is an informational message.</li>
                    <li>You can add icons like the blue x above to clear the message.</li>
                    <li>That one doesn't work, but you can still click it.</li>
                </ul></ign-info-banner>
        </div></mat-tab>
    <mat-tab label="HTML"><div class="tab-height">
        <table style="width:100%">
            <p> &lt;ign-info-banner> &lt;button class="dismiss-button" type="button" mat-icon-button"&gt;&times;&lt;/button&gt;</p>
            <p> &nbsp;&nbsp;&lt;ul class="message-list"&gt;</p>
            <p>&nbsp;&nbsp; &nbsp;&nbsp; &lt;li&gt;This is an informational message.&lt;/li&gt;</p>
            <p>&nbsp;&nbsp; &nbsp;&nbsp; &lt;li>You can add icons like the blue x above to clear the message.&lt;/li&gt;</p>
            <p>&nbsp;&nbsp; &nbsp;&nbsp;&lt;li&gt;That one doesn't work, but you can still click it.&lt;/li&gt;</p>
            <p>&nbsp;&nbsp;&lt;/ul&gt;&lt;/ign-info-banner></p>
        </table>
    </div></mat-tab>
</mat-tab-group>

## Content

* Info banners should be displayed when there is a message regarding a request sent by the user.
* Info banners should include mechanisms that allow the user to close the component.
* Info banners should not contain error messages.


## Style

* Info banners should be short and concise.
* Only one message should be displayed using info banner components.
* Info banners should be displayed along the top of the page or the bottom corners.
* Info banners should avoid overlapping any elements or content on the page.
* Info banners should maintain their formatting and blue font, as to draw attention to the user that there was not
a problem.

*** TypeScript *** 

*** ExternalTypeScript ***

*** Imports ***