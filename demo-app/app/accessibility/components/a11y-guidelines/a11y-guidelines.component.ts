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
        { name: 'Dialog', route: '/dialog' },
        { name: 'Error Banner', route: '/error-banner' },
        { name: 'Floating Action Button', route: '/expandable-fab' },
        { name: 'Form', route: '/form' },
        { name: 'Icon', route: '/icon' },
        { name: 'Info Banner', route: '/info-banner' },
        { name: 'Loading Container', route: '/loading-container' },
        { name: 'Nav List', route: '/nav-list' },
        { name: 'Radio Buttons', route: '/radio-button' },
        { name: 'Sidenav', route: '/sidenav' },
    ];

    pageList = [
        { name: 'Skip Navigation', route: '/skip-nav-guidelines' },
        { name: 'Roles', route: '/roles-guidelines' },
        { name: 'Route Names', route: '/routes-guidelines' },
    ];

    constructor(router: Router) {
        this.router$ = router;
    }
}
