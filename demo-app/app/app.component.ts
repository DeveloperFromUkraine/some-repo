import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Routes, Router, NavigationEnd } from '@angular/router';
import { DemoContributionComponent } from './demo/demo-contribution/demo-contribution.component';
import { Subject } from 'rxjs';
import { SlackBotDialogComponent } from './slack-bot/slack-bot-dialog.component'

const routes: Routes = [
    { path: 'contribution', component: DemoContributionComponent},
];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    @ViewChild('header')
    header: ElementRef;
    headerHeight: number;
    private router$;
    private currUrl: string;
  navItems = [
    { name: 'Accessibility', route: '/accessibility-component' },
    { name: 'Button Group', route: '/button-group' },
    { name: 'Card', route: '/card' },
    { name: 'Center', route: '/center' },
    { name: 'Checkbox', route: '/checkbox' },
    { name: 'Data Table Container', route: '/data-table-container' },
    { name: 'Date Range', route: '/date-range' },
    { name: 'Dialog', route: '/dialog' },
    { name: 'Divider', route: '/divider' },
    { name: 'Empty State', route: '/empty-state' },
    { name: 'Error Banner', route: '/error-banner' },
    { name: 'Floating Action Button', route: '/expandable-fab' },
    { name: 'Field', route: '/field' },
    { name: 'Footer', route: '/footer' },
    { name: 'Form', route: '/form' },
    { name: 'Hub Card', route: '/hub-card' },
    { name: 'Icon', route: '/icon' },
    { name: 'Info Banner', route: '/info-banner' },
    { name: 'List', route: '/list-content' },
    { name: 'Loading Container', route: '/loading-container' },
    { name: 'Nav List', route: '/nav-list' },
    { name: 'Markdown', route: '/markdown' },
    { name: 'Page', route: '/page' },
    { name: 'Radio Button', route: '/radio-button' },
    { name: 'Right Drawer', route: '/right-drawer' },
    { name: 'Selection List', route: '/selection-list' },
    { name: 'Sidenav', route: '/sidenav' },
    { name: 'Text', route: '/text' },
  ];
    testNavItems = [
        { name: 'Status', route: 'status' },
        { name: 'AAA Test Pattern', route: 'aaa'},
        { name: 'Configuring Jest', route: 'jest'},
        { name: 'Asynchronous Operations', route: 'asynchronous'},
        { name: 'Triggering Event Handlers', route: 'event-handler'},
        { name: 'Snapshot Testing', route: 'snapshot'},
        { name: 'Test Types', route: 'test-types'},
        { name: 'Resources', route: 'resources'}
    ];
    selectedOption: string;
    constructor (public dialog: MatDialog, router: Router) {
        this.router$ = router;
    }

    ngOnInit(): void {
        this.router$.events.subscribe(route => {
            if (route instanceof NavigationEnd) {
                this.currUrl = route.url;
            }
        });
    }

    openDialog(): void {
        let dialogRef = this.dialog.open(SlackBotDialogComponent, {
            data: { url: this.currUrl, baseUrl: 'http://ignite-design-system.apps.mia.ulti.io/#' },
        });
        dialogRef.afterClosed().subscribe(result => {
            this.selectedOption = result;
        });
    }
}