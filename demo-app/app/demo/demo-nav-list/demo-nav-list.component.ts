import { Component } from '@angular/core';

@Component({
    selector: 'demo-nav-list',
    templateUrl: './demo-nav-list.html',
})

export class DemoNavListComponent {
     
folders = [
        {
            name: 'Click the folders to open a blank page.',
            updated: new Date('1/1/16'),
        },
        {
            name: 'Your descriptor will go here.',
            updated: new Date('1/17/16'),
        },
        {
            name: 'The dates are just for show.',
            updated: new Date('1/28/16'),
        }
    ];


}


