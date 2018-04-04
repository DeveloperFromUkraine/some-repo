import { Component } from '@angular/core';

import { MatSnackBar } from '@angular/material';
@Component({
    selector: 'demo-snackbars-and-toasts',
    templateUrl: './demo-snackbars-and-toasts.html',
})

export class DemoSnackbarsAndToastsComponent {
     

constructor(public snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open(`I'm a snackbar! Hello! I'll close in a few seconds or you can click the x.`, 'x', {
        duration: 5000
        });
    }


}


