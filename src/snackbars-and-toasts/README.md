## Use
    Snackbars contain a single line of text directly related to the operation performed. They may contain a text action but no icons. see [Material Design Snackbars](https://material.io/guidelines/components/snackbars-toasts.html) and [Angular Material Snackbars](https://material.angular.io/components/snack-bar/overview)

    ### Content 
        * Brief text information to communicate system status or a success message
        * Contains no icons

    ### Actions
        * Show only one snackbar message at a time (successively if more than one)
        * May contain a single action but action should not be "cancel" or "dismiss"
            * For two or more actions a [Dialog](/display/IDS/Dialogs) not a even when one of the actions is a dismiss action. If the action described in the is important enough to block the of the screen it should be a dialog.   
        * Automatically dismisses after a brief period of time or if user invokes action

    ### Opening
        -After opening, a MatSnackBarRef is returned. This can be used to dismiss the snack-bar or to receive notification of when the snack-bar is dismissed. For simple messages with an action, the MatSnackBarRef exposes an observable for when the action is triggered. If you want to close a custom snack-bar that was opened via openFromComponent, from within the component itself, you can inject the MatSnackBarRef.

    ### Closing
        - A snack-bar can be dismissed manually by calling the dismiss method on the MatSnackBarRef returned from   the call to open.
        - Only one snack-bar can ever be opened at one time. If a new snackbar is opened while a previous message   is still showing, the older message will be automatically dismissed.
        - A snack-bar can also be given a duration via the optional configuration object:

    ### Implementation
         * Do
            - Use for non critical feedback like success (successfully saved or deleted) or lost connectivity

         * Don't 
            - Don't use buttons or icons
            - Don't use for confirmations like deleting (instead use dialog confirmation with specific decision buttons)
            - Don't use for confirmations of deleting or cancelling where information will be lost.

    ### Style
        - Use out-of-box styling.
            - Action (if present): accent color (dark theme)
            - Width: auto based on content
        - Duration: 5000 ms


## API
    ### Selector 
        * MatSnackBar

    ### Export As
        * matSnackBar

    ### Methods
        * dismiss()
        * open()
        * openFormComponent()
        * openFromTemplate()

  
## Implementation HTML
    <button mat-button (click)="openSnackBar()" aria-label="Show an example snack-bar">
            Click here for a snack bar! It'll pop up at the bottom of the screen!
    </button>


## Implementation TS
    constructor(public snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open(`I'm a snackbar! Hello! I'll close in a few seconds or you can click the x.`, 'x', {
        duration: 5000
        });
    }