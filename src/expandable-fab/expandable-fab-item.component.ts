import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ign-expandable-fab-item',
  templateUrl: './expandable-fab-item.html',
  styleUrls: ['./expandable-fab-item.scss'],
})
export class ExpandableFabItemComponent {
  @Input() tooltipText: string;
  @Input() icon: string;
  @Input() href: string;
  @Input() router: string;
  @Output() clicked = new EventEmitter<any>();
}
