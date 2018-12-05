import {
  Component,
  Input,
  AfterViewInit,
  OnChanges,
  ChangeDetectionStrategy
} from '@angular/core';

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

const deprecatedSizes = ['small', 'large', 'medium'];

@Component({
  selector: 'ign-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent implements  AfterViewInit, OnChanges {
  @Input() image: string;
  @Input() initials: string;
  @Input() size: string;
  @Input() tooltip: string;
  @Input() ariaLabel: string;

  avatarSize: string;
  state = 'icon';

  ngAfterViewInit() {
    if (deprecatedSizes.includes(this.size)) {
      console.warn(
        `Deprecation warning: Avatar sizes "small", "medium" and "large" are being removed
        in favor of "s", "m" and "l" respectively. Support for these sizes will be dropped soon.`
      );
    }
  }

  ngOnChanges() {
    this.setAvatarSize(this.size);
    this.setState();
  }

  setAvatarSize(size = 'l'): void {
    this.avatarSize = AvatarSize[size.toUpperCase()] || AvatarSize.L;
  }

  setState(): void {
    if (!!this.image) {
      this.state = 'image';
      return;
    }
    if (!!this.initials) {
      this.state = 'initials';
      return;
    }
    this.state = 'icon';
  }
}
