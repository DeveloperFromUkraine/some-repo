import { Component, Input } from '@angular/core';

enum AvatarSize {
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
}

@Component({
  selector: 'ign-avatar',
  templateUrl: './avatar.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input() image: string;
  @Input() initials: string;
  @Input() size: string;
  @Input() tooltip: string;
  @Input() ariaLabel: string;

  getSize(size: string): string {
    return AvatarSize[size.toUpperCase()] || AvatarSize.L;
  }
}
