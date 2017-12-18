import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CardSectionSubTitleComponent } from "index";
import { ComponentTest } from "../../../test/test-bed/component";


describe('CardSectionSubTitleComponent', () => {
    let fixture: ComponentFixture<CardSectionSubTitleComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [CardSectionSubTitleComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CardSectionSubTitleComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});