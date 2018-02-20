import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CardMainComponent } from "./index";
import { ComponentTest } from '../../../test/test-bed/component';

describe('CardMainComponent', () => {
    let fixture: ComponentFixture<CardMainComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [CardMainComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CardMainComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});