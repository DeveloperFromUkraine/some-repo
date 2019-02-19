import { Component, Input } from '@angular/core';

@Component({
  selector: 'ign-sidenav-header',
  templateUrl: './sidenav-header.html',
  styleUrls: ['./sidenav-header.css'],
})
export class SideNavHeaderComponent {
  @Input() title: string;
  @Input() subtitle: string;
}
