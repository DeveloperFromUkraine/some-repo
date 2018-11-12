## Use
    Info banner components are used to display informational messages to the front end in order to notify users that there was no problem completing a task or other information.

    ### Messages
        * Error banner should only be used to display informational messages.
        * No error messages.

    ### Location
        * Info banner should appear at the top of the page, over the other components.
        
    ### Accessibility
        * The default implementation of aria-live region for info banner is set to polite. 
        * All other accessibility should be maintained by the components within the info banner container.

## API
    ### Selector
        * ign-info-banner
    
    ### Exported As 
        * InfoBannerComponent
    
## Implementation HTML
    <ign-info-banner> <button class="dismiss-button" type="button" aria-label="exit" mat-icon-button>&times;</button>
        <ul class="message-list">
            <li>This is an informational message.</li>
            <li>You can add icons like the blue x above to clear the message.</li>
            <li>That one doesn't work, but you can still click it.</li>
        </ul>
    </ign-info-banner>

## Implementation TS
    None