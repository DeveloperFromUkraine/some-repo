import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

// tslint:disable:use-host-property-decorator
@Component({
  selector: 'ign-right-drawer',
  templateUrl: './right-drawer.html',
  styleUrls: ['./right-drawer.scss'],
  host: {
    '[class.drawer-is-open]': 'open',
  },
})
export class RightDrawerComponent implements OnInit {
  @Input() open = false;
  @Input() startOpen = false;
  @Input() title: string;
  @Output() openChange = new EventEmitter<boolean>();

  ngOnInit() {
    this.toggleDrawer(this.startOpen || this.open);
  }

  toggleDrawer(isOpen: boolean) {
    this.open = isOpen;
    this.openChange.emit(isOpen);
  }

  closeDrawer() {
    this.toggleDrawer(false);
  }

  openDrawer() {
    this.toggleDrawer(true);
  }
}
