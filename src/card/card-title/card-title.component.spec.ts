import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CardTitleComponent } from "index";
import { ComponentTest } from "../../../test/test-bed/component";


describe('CardTitleComponent', () => {
    let fixture: ComponentFixture<CardTitleComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [CardTitleComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CardTitleComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});