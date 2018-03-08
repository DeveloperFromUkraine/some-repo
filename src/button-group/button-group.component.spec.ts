import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ButtonGroupComponent } from './index';
import { ComponentTest } from '../../test/test-bed/component';

describe('Button Group', () => {
    let fixture: ComponentFixture<ButtonGroupComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [ButtonGroupComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonGroupComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
}); 