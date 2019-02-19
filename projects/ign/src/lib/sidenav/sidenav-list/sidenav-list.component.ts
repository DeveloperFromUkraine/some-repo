import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'ign-sidenav-list',
  templateUrl: './sidenav-list.html',
  styleUrls: ['./sidenav-list.css'],
})
export class SideNavListComponent {
  @HostBinding('attr.role') role = 'list';
}
