import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CardSubtitleComponent } from "index";
import { ComponentTest } from "../../../test/test-bed/component";


describe('CardSubtitleComponent', () => {
    let fixture: ComponentFixture<CardSubtitleComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [CardSubtitleComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CardSubtitleComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});