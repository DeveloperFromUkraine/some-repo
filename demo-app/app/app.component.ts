import { Component, ElementRef, ViewChild,  OnInit, OnDestroy } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.scss'
    ],
})
export class AppComponent implements OnInit, OnDestroy {
    @ViewChild('header')
    header: ElementRef;
    headerHeight: number;

  navItems = [
    { name: 'Accessibility', route: '/accessibility-component' },
    { name: 'Card', route: '/card' },
    { name: 'Center', route: '/center' },
    { name: 'Checkbox', route: '/checkbox' },
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
    {name: 'Doc Site Contributions', route: '/contribution'},
  ];

  testNavItems = [
    { name: 'Status', route: 'status' },
    { name: 'AAA Test Pattern', route: 'aaa'},
    { name: 'Asynchronous Operations', route: 'asynchronous'},
    { name: 'Configuring Jest', route: 'jest'},
    { name: 'Triggering Event Handlers', route: 'event-handler'},
    { name: 'Snapshot Testing', route: 'snapshot'},
    { name: 'Test Types', route: 'test-types'},
    { name: 'Resources', route: 'resources'}
  ];

    public formBuilder: FormBuilder;
    private close$ = new Subject<void>();
    form: FormGroup;
    animal: string;
    name: string;
    constructor (formBuilder: FormBuilder, public dialog: MatDialog) {
        this.formBuilder = formBuilder;
    }

    openDialog(): void {
        let dialogRef = this.dialog.open(SlackBotDialogComponent, {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
    ngOnInit(): void {
        this.form = this.formBuilder.group({
            myDateRange: this.formBuilder.group({
                startDate: [null],
                endDate: [null]
            })
        })
    }

    ngOnDestroy(): void {
        this.close$.next();
        this.close$.complete();
    }
}

@Component({
    selector: 'slackbot-dialog',
    templateUrl: './slackbot-dialog.html',
})
export class SlackBotDialogComponent {}
