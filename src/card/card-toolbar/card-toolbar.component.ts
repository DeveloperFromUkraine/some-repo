import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'ign-card-toolbar',
  templateUrl: './card-toolbar.html',
  styleUrls: ['./card-toolbar.scss'],
})
export class CardToolbarComponent {
  @HostBinding('attr.role') role = 'toolbar';
}
