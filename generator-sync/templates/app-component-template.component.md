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
    <% for(var i = 0; i < componentNav.length; i ++) { %> <%- componentNav[i]%> 
    <% } %>
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