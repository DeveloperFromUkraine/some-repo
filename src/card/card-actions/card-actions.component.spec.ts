import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CardActionsComponent } from "./index";
import { ComponentTest } from '../../../test/test-bed/component';

describe('CardActionsComponent', () => {
    let fixture: ComponentFixture<CardActionsComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [CardActionsComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CardActionsComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
}); 