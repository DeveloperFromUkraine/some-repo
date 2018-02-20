import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CardSectionTitleComponent } from "./index";
import { ComponentTest } from "../../../test/test-bed/component";


describe('CardSectionTitleComponent', () => {
    let fixture: ComponentFixture<CardSectionTitleComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [CardSectionTitleComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CardSectionTitleComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});