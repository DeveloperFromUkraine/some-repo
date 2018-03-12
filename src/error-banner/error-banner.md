*** HTML ***
# Error Banner

## Use
Error banner components are used to display error messages to the front end in order to notify users that there
    was a problem processing a command.

## Sample
<mat-tab-group>
    <mat-tab label="Component Sample">
        <div class="tab-height">
            <ign-error-banner> <button class="dismiss-button" type="button" mat-icon-button>&times;</button>
                <ul class="message-list">
                    <li>This is an error message.</li>
                    <li>You can add icons like the red x above to clear the message.</li>
                    <li>That one doesn't work, but you can still click it.</li>
                </ul></ign-error-banner>
        </div></mat-tab>
    <mat-tab label="HTML"><div class="tab-height">
        <table style="width:100%">
            <p> &lt;ign-error-banner&gt; &lt;button class="dismiss-button" type="button" mat-icon-button"&gt;&times;&lt;/button&gt;</p>
            <p>&nbsp;&nbsp;&lt;ul class="message-list"&gt;</p>
            <p>&nbsp;&nbsp; &nbsp;&nbsp; &lt;li&gt;This is an error message.&lt;/li&gt;</p>
            <p>&nbsp;&nbsp; &nbsp;&nbsp; &lt;li>You can add icons like the red x above to clear the message.&lt;/li&gt;</p>
            <p> &nbsp;&nbsp; &nbsp;&nbsp;&lt;li&gt;That one doesn't work, but you can still click it.&lt;/li&gt;</p>
            <p>&nbsp;&nbsp;&lt;/ul&gt;&lt;/ign-error-banner></p>
        </table>
    </div></mat-tab>
</mat-tab-group>

## Content

* Error banners should be displayed when there was an issue executing an instruction, whether it is an error from
the front end or back end.
* Error banners should include mechanisms that allow the user to close the component.
* Error banners should not include informational, non-error messages.


## Style
* Error banners should be short and concise. Longer errors should be displayed in logs.
* If there are multiple errors, they should be displayed on the same banner in a list format.
* Error banners should be displayed along the top of the page or in the corners.
* Error banners should avoid overlapping any elements or content on the page.
* Error banners should maintain their formatting and red font, as to draw attention to the user that there was a problem.

*** TypeScript *** 

*** ExternalTypeScript ***

*** Imports ***