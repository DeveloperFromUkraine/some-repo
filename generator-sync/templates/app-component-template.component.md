import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Routes, Router, NavigationEnd } from '@angular/router';
import { DemoContributionComponent } from './demo/demo-contribution/demo-contribution.component';
import { Subject } from 'rxjs';
import { SlackBotDialogComponent } from './slack-bot/slack-bot-dialog.component'
import { PendoService } from './pendo/pendo.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

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
    @ViewChild('sidenav') sidenav: any;
    header: ElementRef;
    headerHeight: number;
    cookieKey = 'IDS_Playground';
    cookieValue: string;
    router$;
    private currUrl: string;
    sidenavAriaLabel: string;
    sidenavVisibility: string;
    private sidenavOpenedText: string = "Close Side Navigation";
    private sidenavClosedText: string = "Open Side Navigation";
    
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

    accessibilityItems = [
        { name: 'A11y Home', route: 'a11y-guidelines' },
    ];

    selectedOption: string;

    constructor (public dialog: MatDialog, private router: Router, 
        private pendoService: PendoService, private cookieService: CookieService) {
        this.router$ = router;
    }

    ngOnInit(): void {
        this.checkCookie();
        this.initializePendo();
        this.router$.events.subscribe(route => {
            if (route instanceof NavigationEnd) {
                this.currUrl = route.url;
            }
        });
        this.sidenavAriaLabel = this.sidenav.opened ? this.sidenavOpenedText : this.sidenavClosedText;
        this.sidenavVisibility = this.sidenav.opened;
    }

    toggleSideNav(): void { 
        this.sidenav.toggle();
        this.sidenavAriaLabel = this.sidenav.opened ? this.sidenavOpenedText : this.sidenavClosedText;
        this.sidenavVisibility = this.sidenav.opened;
    }

    openDialog(): void {
        let dialogRef = this.dialog.open(SlackBotDialogComponent, {
            data: { url: this.currUrl, baseUrl: 'http://ignite-design-system.apps.mia.ulti.io/#' },
        });
        dialogRef.afterClosed().subscribe(result => {
            this.selectedOption = result;
        });
    }

    checkCookie(): void {
        this.cookieValue = this.cookieService.get(this.cookieKey);
        if (this.cookieValue === undefined) {
            this.cookieService.put(this.cookieKey, Math.random().toString(36).replace(/[^a-z]+/g, ''));
            this.cookieValue = this.cookieService.get(this.cookieKey);
        }
    }

    initializePendo(): void {
        let pendoOptions = {
            visitor: { id: this.cookieValue }        
        }   
        this.pendoService.initialize(pendoOptions);
    }
}