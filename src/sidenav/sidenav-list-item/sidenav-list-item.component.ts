import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  HostListener,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'ign-sidenav-list-item',
  templateUrl: './sidenav-list-item.html',
  styleUrls: ['./sidenav-list-item.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SideNavListItemComponent {
  @Input() icon: string;
  @Input() description: string;
  @Input() key: string;
  @Output() onClick: EventEmitter<string> = new EventEmitter();

  @HostBinding('attr.role') role = 'listitem';
  @HostListener('keyup.enter', ['$event'])
  @HostListener('keyup.space', ['$event'])
  handleClick(event: Event) {
    event.preventDefault();

    this.onClick.emit(this.key);
  }
}
