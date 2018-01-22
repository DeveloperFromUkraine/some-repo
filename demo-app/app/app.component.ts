import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('header')
  header: ElementRef;
  headerHeight: number;

  navItems = [
    { name: 'Card', route: '/card' },
    { name: 'Center', route: '/center' },
    { name: 'Checkbox', route: '/checkbox' },
    { name: 'Date Range', route: '/date-range' },
    { name: 'Dialog', route: '/dialog' },
    { name: 'Divider', route: '/divider' },
    { name: 'Empty State', route: '/empty-state' },
    { name: 'Error Banner', route: '/error-banner' },
    { name: 'Expandable Floating Action Button (FAB)', route: '/expandable-fab' },
    { name: 'Field', route: '/field' },
    { name: 'Footer', route: '/footer' },
    { name: 'Form', route: '/form' },
    { name: 'Radio Button', route: '/radio-button' },
  ];

  ngAfterViewInit () {
    setTimeout(() => {
      this.headerHeight = this.header.nativeElement.offsetHeight;
    });
  }
}
