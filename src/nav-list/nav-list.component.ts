import { Component } from '@angular/core';

@Component({
    selector: 'ign-nav-list',
    template: `<mat-nav-list><ng-content></ng-content></mat-nav-list>`,
})
export class NavListComponent {}
