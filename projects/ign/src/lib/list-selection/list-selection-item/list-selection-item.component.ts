import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ign-list-selection-item',
  templateUrl: './list-selection-item.html',
  styleUrls: ['./list-selection-item.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ListSelectionItemComponent {
  @Input() key: number;
  @Input() active: boolean;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() statusText: string;
  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter();
}
