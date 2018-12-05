import { AvatarGroupComponent } from './avatar-group.component';
import {
  avatarsX,
  avatars5,
  avatarWOPreferredFN,
  avatarWPreferredFN,
} from './avatars.mock';

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
    it('should only use valid avatars', () => {
      component.avatars = avatarsX;
      component.ngOnChanges();
      expect(component.sanitizedAvatars.length).toEqual(4);
    });

    it('should compute the right tooltip', () => {
      component.avatars = avatars5;
      const expectedTooltips = [
        'tooltip1',
        'preferredFirstName2 lastName2 (formerLastName2)',
        'firstName3 lastName3',
        'preferredFirstName4 lastName4',
        'firstName5 lastName5 (formerLastName5)',
      ];

      component.ngOnChanges();

      expect(expectedTooltips.length).toEqual(component.sanitizedAvatars.length);
      component.sanitizedAvatars.forEach((avatar, i) => {
        expect(avatar.tooltip).toBe(expectedTooltips[i]);
      });
    });

    it('should not set tooltips when "showTooltips" is false', () => {
      component.avatars = avatars5;
      component.showTooltips = false;
      component.ngOnChanges();
      component.sanitizedAvatars.forEach((avatar, i) => {
        expect(avatar.tooltip).toBe('');
      });
    });

    it('should set the initials for an avatar that has no preferredName', () => {
      component.avatars = [avatarWOPreferredFN];
      component.ngOnChanges();
      expect(component.sanitizedAvatars[0].initials).toBe('FL');
    });

    it('should set the initials for an avatar with a preferredName', () => {
      component.avatars = [avatarWPreferredFN];
      component.ngOnChanges();
      expect(component.sanitizedAvatars[0].initials).toBe('PL');
    });

    it('should compute the correct count of extra/hidden avatars', () => {
      component.avatars = avatars5;
      component.cap = 3;
      component.ngOnChanges();
      expect(component.counterValue).toEqual(2);
    });

    describe('Given the group shows context', () => {
      it('should give the ellipsis value for counter initials', () => {
        component.avatars = avatars5;
        component.cap = 3;
        component.showContext = true;
        component.ngOnChanges();
        expect(component.counterInitials).toBe('...');
      });
    });

    describe('Given the group does not show context', () => {
      it('should give the counter value for counter initials', () => {
        component.avatars = avatars5;
        component.cap = 3;
        component.showContext = false;
        component.ngOnChanges();
        expect(component.counterInitials).toBe('+2');
      });
    });

    describe('Given cap is greater than the number of avatars', () => {
      it('should not display the counter', () => {
        component.avatars = avatars5;
        component.cap = 6;
        component.ngOnChanges();
        const isCounterShown: boolean = component.showCounter && component.counterValue > 0;

        expect(isCounterShown).toBeFalsy();
      });
    });

    describe('Given cap is equal to the number of avatars', () => {
      it('should not display the counter', () => {
        component.avatars = avatars5;
        component.cap = 5;
        component.ngOnChanges();
        const isCounterShown: boolean = component.showCounter && component.counterValue > 0;

        expect(isCounterShown).toBeFalsy();
      });
    });

    describe('Given an @Input counter offset', () => {
      it('should display a value equal to the regular counter plus the offset amount', () => {
        component.avatars = avatars5;
        component.cap = 4;
        component.counterOffset = 5;
        component.ngOnChanges();
        expect(component.counterValue).toBe(6);
      });
    });
  });
});
