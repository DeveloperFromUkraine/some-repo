## Use
    Error banner components are used to display error messages to the front end in order to notify users that there was a problem processing a command.

    ### Messages
        * Error banner should only be used to display error messages.
        * No confirmation messages.

    ### Location
        * Error banner should appear at the top of the page, over the other components.

    ### Accessibility
        * The default implementation of aria-live region for info banner is set to assertive. 
        * Add a descriptive aria-label to the dismiss buttons tag that describes the action of the button (ex:      exit)
        * Refer to the Sample HTML for an example
        * All other accessibility should be maintained by the components within the error banner container.
        

## API
    ### Selector
        * ign-error-banner
    
    ### Export As
        * ErrorBannerComponent

## Implementation HTML
    <ign-error-banner> <button class="dismiss-button" type="button" aria-label="exit"                   mat-icon-button>&times;</button>
        <ul class="message-list">
            <li>This is an error message.</li>
            <li>You can add icons like the red x above to clear the message.</li>
            <li>That one doesn't work, but you can still click it.</li>
        </ul>
    </ign-error-banner>

## Implementation TS
    None