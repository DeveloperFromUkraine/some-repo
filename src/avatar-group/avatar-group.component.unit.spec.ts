import { AvatarGroupComponent } from './avatar-group.component';
import {
  avatarsX,
  avatars5,
  invalidAvatar,
  avatarWOPreferredFN,
  avatarWPreferredFN,
} from './avatars.mock';
import { Avatar } from './avatar-group.types';

describe('AvatarGroupComponent Unit Tests', () => {
  let component: AvatarGroupComponent;

  beforeEach(() => {
    component = new AvatarGroupComponent();
  });

  it('should have correct @Input default values', () => {
    expect(component.avatars).toBeUndefined();
    expect(component.cap).toBe(8);
    expect(component.showCounter).toBeTruthy();
    expect(component.showContext).toBeFalsy();
    expect(component.counterOffset).toBe(0);
    expect(component.counterLink).toBeUndefined();
    expect(component.counterAriaLabel).toBeUndefined();
    expect(component.viewAllLink).toBeUndefined();
    expect(component.viewAllAriaLabel).toBeUndefined();
  });

  it('should have defined @Output values', () => {
    expect(component.avatarClick).toBeDefined();
    expect(component.counterClick).toBeDefined();
    expect(component.viewAllClick).toBeDefined();
  });

  it('should have the correct default size', () => {
    expect(component.size).toBe('m');
  });

  describe('Component methods tests', () => {
    beforeEach(() => {
      component.avatars = avatarsX;
    });

    it('should only use valid avatars', () => {
      const expectedAvatars: Avatar[] = [avatarsX[0], avatarsX[2], avatarsX[4], avatarsX[8]];
      const actualAvatars = component.sanitizeAvatars(avatarsX);

      expect(actualAvatars).toEqual(expectedAvatars);
    });

    it('should compute the right tooltip', () => {
      component.avatars = component.sanitizeAvatars(avatars5);
      const avatars = component.avatars;
      const expectedTooltips = [
        'tooltip1',
        'preferredFirstName2 lastName2 (formerLastName2)',
        'firstName3 lastName3',
        'preferredFirstName4 lastName4',
        'firstName5 lastName5 (formerLastName5)',
      ];

      for (let i = 0; i < avatars.length; i++) {
        const tooltip = component.getAvatarTooltip(avatars[i]);
        expect(tooltip).toBe(expectedTooltips[i]);
      }
    });

    it('should return nothing from getAvatarTooltip if given invalidAvatar', () => {
      const tooltip = component.getAvatarTooltip(invalidAvatar);

      expect(tooltip).toBe('');
    });

    it('should return nothing from getAvatarTooltip if showTooltips is false', () => {
      component.avatars = component.sanitizeAvatars(avatars5);
      component.showTooltips = false;
      const avatars = component.avatars;
      const expectedTooltips = ['', '', '', '', ''];

      for (let i = 0; i < avatars.length; i++) {
        const tooltip = component.getAvatarTooltip(avatars[i]);
        expect(tooltip).toBe(expectedTooltips[i]);
      }
    });

    it('should return initials of name when calling getPersonInitials with avatar that has no preferredName', () => {
      const initials = component.getPersonInitials(avatarWOPreferredFN.person);

      expect(initials).toBe('FL');
    });

    it('should return initials of preferred name when calling getPersonInitials with avatar that has a preferredName', () => {
      const initials = component.getPersonInitials(avatarWPreferredFN.person);

      expect(initials).toBe('PL');
    });

    beforeEach(() => {
      component.avatars = avatars5;
      component.cap = 3;
    });

    it('should compute the correct count of extra/hidden avatars', () => {
      const counterValue = component.getCounterValue(component.avatars);

      expect(counterValue).toBe(2);
    });

    describe('Given the group shows context', () => {
      beforeEach(() => {
        component.showContext = true;
      });

      it('should give the ellipsis value for counter initials', () => {
        expect(component.getCounterInitials()).toBe('...');
      });
    });

    describe('Given the group does not show context', () => {
      beforeEach(() => {
        component.showContext = false;
      });

      it('should give the counter value for counter initials', () => {
        spyOn(component, 'getCounterValue').and.returnValue(2);
        expect(component.getCounterInitials()).toBe('+2');
      });
    });

    describe('Given cap is greater than the number of avatars', () => {
      beforeEach(() => {
        component.cap = 6;
      });

      it('should not display the counter', () => {
        const isCounterShown: boolean =
          component.showCounter && component.getCounterValue(component.avatars) > 0;

        expect(isCounterShown).toBeFalsy();
      });
    });

    describe('Given cap is equal to the number of avatars', () => {
      beforeEach(() => {
        component.cap = 5;
      });

      it('should not display the counter', () => {
        const isCounterShown: boolean =
          component.showCounter && component.getCounterValue(component.avatars) > 0;

        expect(isCounterShown).toBeFalsy();
      });
    });

    describe('Given an @Input counter offset', () => {
      beforeEach(() => {
        component.cap = 4;
        component.counterOffset = 5;
      });

      it('should display a value equal to the regular counter plus the offset amount', () => {
        expect(component.getCounterValue(component.avatars)).toBe(6);
      });
    });
  });
});
