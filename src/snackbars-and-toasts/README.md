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