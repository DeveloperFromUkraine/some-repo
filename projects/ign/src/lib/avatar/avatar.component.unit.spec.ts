import { AvatarComponent } from './avatar.component';

describe('AvatarComponent Unit Tests', () => {
  let comp: AvatarComponent;

  beforeEach(() => {
    comp = new AvatarComponent();
  });

  it('should have correct @Input default values', () => {
    expect(comp.image).toBeUndefined();
    expect(comp.initials).toBeUndefined();
    expect(comp.size).toBeUndefined();
    expect(comp.tooltip).toBeUndefined();
    expect(comp.ariaLabel).toBeUndefined();
  });

  describe('Component methods tests', () => {
    it('default to a large avatar size', () => {
      comp.setAvatarSize();
      expect(comp.avatarSize).toBe('l');
    });

    it('select the correct size modifiers', () => {
      const sizeInputs = ['small', 'medium', 'large', 'xs', 's', 'm', 'l', 'xl'];

      const expectedOutputs = ['s', 'm', 'l', 'xs', 's', 'm', 'l', 'xl'];

      for (let i = 0; i < sizeInputs.length; i++) {
        comp.setAvatarSize(sizeInputs[i])
        expect(comp.avatarSize).toBe(expectedOutputs[i]);
      }
    });

    describe('Given an image', () => {
      beforeEach(() => {
        comp.image = 'image.png';
      });

      it('should select the image state', () => {
        comp.initials = 'AW';
        comp.setState();
        expect(comp.state).toBe('image');
      });
    });

    describe('Given no image and some initials', () => {
      beforeEach(() => {
        comp.image = undefined;
        comp.initials = 'AW';
      });

      it('should select the initials state', () => {
        comp.setState();
        expect(comp.state).toBe('initials');
      });
    });

    describe('Given no image and no initials', () => {
      beforeEach(() => {
        comp.image = undefined;
        comp.initials = undefined;
      });

      it('should select the icon state', () => {
        comp.setState();
        expect(comp.state).toBe('icon');
      });
    });
  });
});
