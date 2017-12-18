import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CardToolbarComponent } from "index";
import { ComponentTest } from "../../../test/test-bed/component";


describe('CardToolbarComponent', () => {
    let fixture: ComponentFixture<CardToolbarComponent>;

    beforeEach(async () => {
        ComponentTest.createTestBed([], [CardToolbarComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CardToolbarComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});