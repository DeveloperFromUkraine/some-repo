import { AvatarComponent } from './avatar.component';

describe('AvatarComponent Unit Tests', () => {
  let component: AvatarComponent;

  beforeEach(() => {
    component = new AvatarComponent();
  });

  it('should have correct @Input default values', () => {
    expect(component.image).toBeUndefined();
    expect(component.initials).toBeUndefined();
    expect(component.size).toBeUndefined();
    expect(component.tooltip).toBeUndefined();
    expect(component.ariaLabel).toBeUndefined();
  });

  describe('Component methods tests', () => {
    it('default to a large avatar size', () => {
      expect(component.getSize()).toBe('l');
    });

    it('select the correct size modifiers', () => {
      const sizeInputs = ['small', 'medium', 'large', 'xs', 's', 'm', 'l', 'xl'];

      const expectedOutputs = ['s', 'm', 'l', 'xs', 's', 'm', 'l', 'xl'];

      for (let i = 0; i < sizeInputs.length; i++) {
        expect(component.getSize(sizeInputs[i])).toBe(expectedOutputs[i]);
      }
    });

    describe('Given an image', () => {
      beforeEach(() => {
        component.image = 'image.png';
      });

      it('should select the image state', () => {
        component.initials = 'AW';
        expect(component.getState()).toBe('image');
      });
    });

    describe('Given no image and some initials', () => {
      beforeEach(() => {
        component.image = undefined;
        component.initials = 'AW';
      });

      it('should select the initials state', () => {
        expect(component.getState()).toBe('initials');
      });
    });

    describe('Given no image and no initials', () => {
      beforeEach(() => {
        component.image = undefined;
        component.initials = undefined;
      });

      it('should select the icon state', () => {
        expect(component.getState()).toBe('icon');
      });
    });
  });
});
