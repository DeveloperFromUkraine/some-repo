import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'accessibility-guidelines',
    templateUrl: './a11y-guidelines.html',
})
export class AccessibilityGuidelinesComponent {
    private router$: Router;

    componentList = [
        { name: 'Checkboxes', route: '/checkbox' },
        { name: 'Error Banner', route: '/error-banner' },
        { name: 'Floating Action Button', route: '/expandable-fab' },
        { name: 'Icon', route: '/icon' },
        { name: 'Info Banner', route: '/info-banner' },
        { name: 'Loading Container', route: '/loading-container' },
        { name: 'Nav List', route: '/nav-list' },
        { name: 'Radio Buttons', route: '/radio-button' },
    ];

    constructor(router: Router) {
        this.router$ = router;
    }
}
