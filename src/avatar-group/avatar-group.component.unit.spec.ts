import { AvatarGroupComponent } from './avatar-group.component';
import { avatarsX, avatars5 } from './avatars.mock';
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
        expect(component.counterOffset).toBe(0);
        expect(component.counterLink).toBeUndefined();
        expect(component.counterAriaLabel).toBeUndefined();
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

        beforeEach(() => {
            component.avatars = avatars5;
            component.cap = 3;
        });

        it('should compute the correct count of extra/hidden avatars', () => {
            const counterValue = component.getCounterValue(component.avatars);

            expect(counterValue).toBe(2);
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
