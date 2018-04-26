import { Component, Input } from '@angular/core';

@Component({
  selector: 'ign-avatar',
  template: `
    <div id="avatar"
      [class]="'container ' + getSize(size)"
      matTooltip="{{ tooltip }}"
      attr.aria-label="{{ tooltip || ariaLabel }}"
      tabindex="{{ (!!tooltip || !!ariaLabel) ? 0 : -1 }}"
    >
      <img *ngIf="!!image" [src]="image" class="image" alt="">
      <div *ngIf="!image && !!initials" class="initials-container">
        <span class="initials" aria-hidden="true">{{ initials }}</span>
      </div>
      <div *ngIf="!image && !initials" class="icon-container">
        <mat-icon class="icon" aria-hidden="true">person</mat-icon>
      </div>
    </div>
  `,
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input() image: string;
  @Input() initials: string;
  @Input() size: string;
  @Input() tooltip: string;
  @Input() ariaLabel: string;

  getSize(size): string { 
    const sizes = {
      'small': 'small',
      'large': 'large',
      'default': 'large'
    };
    return sizes[size] || sizes['default'];
  }
}
