import { Component, Input, AfterViewInit } from '@angular/core';

enum AvatarSize {
  SMALL = 's',
  LARGE = 'l',
  MEDIUM = 'm',
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
}

const deprecatedSizees = ['small', 'large', 'medium'];

@Component({
  selector: 'ign-avatar',
  templateUrl: './avatar.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements AfterViewInit {
  @Input() image: string;
  @Input() initials: string;
  @Input() size: string;
  @Input() tooltip: string;
  @Input() ariaLabel: string;

  ngAfterViewInit() {
    if (deprecatedSizees.includes(this.size)) {
      console.warn(
        `Deprecation warning: Avatar sizes "small", "medium" and "large" are being removed
        in favor of "s", "m" and "l" respectively. Support for these sizes will be dropped soon.`
      );
    }
  }

  getSize(size = 'l'): string {
    return AvatarSize[size.toUpperCase()] || AvatarSize.L;
  }
}
