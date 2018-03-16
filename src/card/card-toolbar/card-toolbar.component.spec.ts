import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CardToolbarComponent } from "./index";
import { ComponentTest } from "../../../test/test-bed/component";


describe('Card Toolbar', () => {
    let fixture: ComponentFixture<CardToolbarComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [CardToolbarComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CardToolbarComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});