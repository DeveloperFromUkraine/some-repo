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
    { name: 'Dialog', route: '/dialog' },
    { name: 'Radio Button', route: '/radio-button' },
    { name: 'Checkbox', route: '/checkbox' },
  ];

  ngAfterViewInit () {
    setTimeout(() => {
      this.headerHeight = this.header.nativeElement.offsetHeight;
    });
  }
}
