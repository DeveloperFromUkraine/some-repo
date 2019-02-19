import { Component, Input, Output, EventEmitter, AfterViewInit, OnChanges } from '@angular/core';
import { Avatar, Person } from './avatar-group.types';

interface SanitizedAvatar {
  image?: string;
  initials?: string;
  link?: string[];
  tooltip?: string;
}

@Component({
  selector: 'ign-avatar-group',
  templateUrl: './avatar-group.component.html',
  styleUrls: ['./avatar-group.component.css'],
})
export class AvatarGroupComponent implements AfterViewInit, OnChanges {
  @Input() avatars: Avatar[];
  @Input() cap = 8;
  @Input() showCounter = true;
  @Input() showContext = false;
  @Input() showTooltips = true;
  @Input() counterOffset = 0;
  @Input() counterLink: string;
  @Input() counterAriaLabel: string;
  @Input() viewAllLink: string;
  @Input() viewAllAriaLabel: string;

  @Output() avatarClick = new EventEmitter<Avatar>();
  @Output() counterClick = new EventEmitter();
  @Output() viewAllClick = new EventEmitter();

  sanitizedAvatars: SanitizedAvatar[] = [];
  counterInitials: string;
  counterValue: number;

  // Set size of all avatars in the group to medium
  size = 'm';

  ngAfterViewInit() {
    if (this.showTooltips) {
      console.warn(
        `Deprecation warning: Displaying tooltips for avatar groups is no longer a pattern. This will be deprecated soon.
        Please be sure to remove the 'tooltip' field when consuming the Avatar type.`
      );
    }
  }

  ngOnChanges() {
    this.sanitizedAvatars = this.sanitizeAvatars(this.avatars)
      .map(avatar => {
        let link = [] as string[];
        if (avatar.link) {
          if (Array.isArray(avatar.link)) {
            link = avatar.link;
          } else {
            link = [avatar.link];
          }
        }

        return {
          image: avatar.image || '',
          initials: avatar.person ? this.getPersonInitials(avatar.person) : '',
          link: link,
          tooltip: this.getAvatarTooltip(avatar)
        };
      })
      .slice(0, this.cap);
    this.counterInitials = this.getCounterInitials();
    this.counterValue = this.getCounterValue(this.avatars);
  }

  private getAvatarTooltip(avatar: Avatar): string {
    if (!this.showTooltips) {
      return '';
    }
    if (avatar.tooltip) {
      return avatar.tooltip;
    }
    return avatar.person ? this.getPersonName(avatar.person) : '';
  }

  private getCounterInitials(): string {
    return this.showContext ? '...' : `+${this.getCounterValue(this.avatars)}`;
  }

  private getCounterValue(avatars: Avatar[]): number {
    return avatars.length - this.cap + this.counterOffset;
  }

  private getPersonInitials(person: Person): string {
    const first = person.preferredFirstName || person.firstName;
    const initials = first.charAt(0) + person.lastName.charAt(0);
    return initials.toUpperCase();
  }

  private getPersonName(person: Person): string {
    const first = person.preferredFirstName || person.firstName;
    const former = !person.formerLastName ? '' : `(${person.formerLastName})`;
    return this.sanitizePersonName(`${first} ${person.lastName} ${former}`).trim();
  }

  /**
   * This method prevents attempts to create avatars with invalid data. It is
   * not meant to prevent compilation-time errors, since interface Avatar already
   * accomplishes that, but rather prevent runtime errors.
   * @param avatars
   */
  private sanitizeAvatars(avatars: Avatar[]): Avatar[] {
    avatars = avatars.filter(avatar => {
      const isEmployeeValid = avatar.person && avatar.person.lastName && avatar.person.firstName;
      return avatar.person ? isEmployeeValid : !!avatar.tooltip;
    });
    return avatars;
  }

  private sanitizePersonName(fullName: string): string {
    let names = fullName.split(' ');
    names = names.filter(name => !!name && name !== 'undefined');
    return names.join(' ');
  }
}
