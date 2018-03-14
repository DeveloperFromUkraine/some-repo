import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'accessibility-guidelines-component',
    templateUrl: './a11y-guidelines.html',
})
export class AccessibilityGuidelinesComponent {
    private router$: Router;

    componentList = [
        { name: 'Radio Buttons', route: '/radio-button' },
    ];

    constructor(router: Router) {
        this.router$ = router;
    }
}
