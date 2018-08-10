import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Avatar, Person } from './avatar-group.types';

@Component({
  selector: 'ign-avatar-group',
  templateUrl: './avatar-group.component.html',
  styleUrls: ['./avatar-group.component.scss'],
})
export class AvatarGroupComponent {
  @Input() avatars: Avatar[];
  @Input() cap = 8;
  @Input() showCounter = true;
  @Input() showContext = false;
  @Input() counterOffset = 0;
  @Input() counterLink: string;
  @Input() counterAriaLabel: string;
  @Input() viewAllLink: string;
  @Input() viewAllAriaLabel: string;

  @Output() avatarClick = new EventEmitter<Avatar>();
  @Output() counterClick = new EventEmitter();
  @Output() viewAllClick = new EventEmitter();

  // Set size of all avatars in the group to medium
  size = 'm';

  getAvatarTooltip(avatar: Avatar): string {
    if (avatar.tooltip) {
      return avatar.tooltip;
    }
    return avatar.person ? this.getPersonName(avatar.person) : '';
  }

  getCounterInitials(): string {
    return this.showContext ? '...' : `+${this.getCounterValue(this.avatars)}`;
  }

  getCounterValue(avatars: Avatar[]): number {
    return avatars.length - this.cap + this.counterOffset;
  }

  getPersonInitials(person: Person): string {
    const first = person.preferredFirstName || person.firstName;
    const initials = first.charAt(0) + person.lastName.charAt(0);
    return initials.toUpperCase();
  }

  getPersonName(person: Person): string {
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
  sanitizeAvatars(avatars: Avatar[]): Avatar[] {
    avatars = avatars.filter(avatar => {
      const isEmployeeValid = avatar.person && avatar.person.lastName && avatar.person.firstName;
      return avatar.person ? isEmployeeValid : !!avatar.tooltip;
    });
    return avatars;
  }

  sanitizePersonName(fullName: string): string {
    let names = fullName.split(' ');
    names = names.filter(name => !!name && name !== 'undefined');
    return names.join(' ');
  }
}
